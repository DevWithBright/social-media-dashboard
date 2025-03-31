
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Calendar as CalendarIcon, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

// Mock scheduled posts data
const scheduledPosts = [
  {
    id: 1,
    date: new Date(2023, 5, 10, 9, 0),
    platform: "twitter",
    content: "Check out our latest product update! #ProductLaunch"
  },
  {
    id: 2,
    date: new Date(2023, 5, 12, 10, 30),
    platform: "instagram",
    content: "Behind the scenes at our office. #CompanyCulture"
  },
  {
    id: 3,
    date: new Date(2023, 5, 15, 12, 0),
    platform: "facebook",
    content: "Join our upcoming webinar on social media trends."
  },
  {
    id: 4,
    date: new Date(2023, 5, 18, 15, 0),
    platform: "linkedin",
    content: "We're hiring! Check out our careers page for openings."
  }
];

export function ContentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Filter posts for the selected date
  const postsForSelectedDate = scheduledPosts.filter(
    post => date && post.date.toDateString() === date.toDateString()
  );

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-4 w-4 text-social-instagram" />;
      case "twitter":
        return <Twitter className="h-4 w-4 text-social-twitter" />;
      case "facebook":
        return <Facebook className="h-4 w-4 text-social-facebook" />;
      case "linkedin":
        return <Linkedin className="h-4 w-4 text-social-linkedin" />;
      default:
        return null;
    }
  };

  // Check if a date has scheduled posts
  const hasPostsOnDate = (day: Date) => {
    return scheduledPosts.some(post => post.date.toDateString() === day.toDateString());
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Calendar</CardTitle>
        <CardDescription>View and manage your scheduled posts.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal mb-4",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  modifiers={{
                    hasPost: (day) => hasPostsOnDate(day),
                  }}
                  modifiersStyles={{
                    hasPost: { 
                      backgroundColor: "var(--accent)", 
                      color: "var(--accent-foreground)",
                      fontWeight: "bold" 
                    }
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="md:w-1/2">
            <div className="space-y-4">
              <h3 className="font-medium">
                Scheduled for {date ? format(date, "MMMM d, yyyy") : "today"}
              </h3>
              {postsForSelectedDate.length > 0 ? (
                postsForSelectedDate.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-start space-x-4 rounded-md border p-4"
                  >
                    <div>
                      {getPlatformIcon(post.platform)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">
                        {format(post.date, "h:mm a")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {post.content}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  No posts scheduled for this date.
                </p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Schedule New Post</Button>
      </CardFooter>
    </Card>
  );
}
