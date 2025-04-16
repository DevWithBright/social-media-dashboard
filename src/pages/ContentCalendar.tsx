import DashboardLayout from "@/components/DashboardLayout";
import { CreatePostDialog } from "@/components/posts/CreatePostDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Plus, Instagram, Twitter, Facebook, Linkedin, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const scheduledPosts = [
  {
    id: 1,
    date: new Date(2023, 5, 10),
    time: "09:00 AM",
    platform: "twitter",
    content: "Check out our latest product update! #ProductLaunch",
    status: "scheduled"
  },
  {
    id: 2,
    date: new Date(2023, 5, 12),
    time: "10:30 AM",
    platform: "instagram",
    content: "Behind the scenes at our office. #CompanyCulture",
    status: "scheduled"
  },
  {
    id: 3,
    date: new Date(2023, 5, 15),
    time: "12:00 PM",
    platform: "facebook",
    content: "Join our upcoming webinar on social media trends.",
    status: "scheduled"
  },
  {
    id: 4,
    date: new Date(2023, 5, 18),
    time: "03:00 PM",
    platform: "linkedin",
    content: "We're hiring! Check out our careers page for openings.",
    status: "scheduled"
  },
  {
    id: 5,
    date: new Date(2023, 5, 5),
    time: "02:00 PM",
    platform: "twitter",
    content: "Our CEO was interviewed by @TechNews about our growth strategy.",
    status: "published"
  },
  {
    id: 6,
    date: new Date(2023, 5, 7),
    time: "11:00 AM",
    platform: "instagram",
    content: "Celebrating 5 years of innovation! #Anniversary",
    status: "published"
  }
];

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

const ContentCalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState("month");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<typeof scheduledPosts[0] | null>(null);
  const { toast } = useToast();
  
  const upcomingPosts = scheduledPosts.filter(post => post.status === "scheduled");
  const publishedPosts = scheduledPosts.filter(post => post.status === "published");

  const handleCreatePost = (data: any) => {
    toast({
      title: "Post scheduled",
      description: "Your post has been scheduled successfully.",
    });
  };

  const handleEditPost = (data: any) => {
    toast({
      title: "Post updated",
      description: "Your post has been updated successfully.",
    });
    setEditingPost(null);
  };

  const handleDeletePost = (postId: number) => {
    toast({
      title: "Post deleted",
      description: "Your post has been deleted successfully.",
    });
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Content Calendar</h1>
            <p className="text-muted-foreground">
              Plan and schedule your social media posts.
            </p>
          </div>
          <Button onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Create Post
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-12">
          <Card className="md:col-span-8">
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
              <CardDescription>
                {view === "month" ? format(date || new Date(), "MMMM yyyy") : "Weekly Schedule"}
              </CardDescription>
              <Tabs defaultValue="month" onValueChange={setView}>
                <TabsList>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              
              {view === "week" && (
                <div className="mt-6 space-y-4">
                  <h3 className="font-medium">
                    Posts for {date ? format(date, "MMMM d, yyyy") : "today"}
                  </h3>
                  {scheduledPosts
                    .filter(post => 
                      date && post.date.toDateString() === date.toDateString()
                    )
                    .map((post) => (
                      <div
                        key={post.id}
                        className="flex items-start space-x-4 rounded-md border p-4"
                      >
                        <div>
                          {getPlatformIcon(post.platform)}
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">{post.time}</p>
                          <p className="text-sm">{post.content}</p>
                          <div className="flex items-center">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              post.status === "published" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-blue-100 text-blue-800"
                            }`}>
                              {post.status === "published" ? "Published" : "Scheduled"}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Upcoming Posts</CardTitle>
              <CardDescription>
                Your next 5 scheduled posts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingPosts.slice(0, 5).map((post) => (
                  <div key={post.id} className="flex items-start space-x-4 rounded-md border p-3">
                    <div>
                      {getPlatformIcon(post.platform)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">
                          {format(post.date, "MMM d")} • {post.time}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {post.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-12">
            <CardHeader>
              <CardTitle>All Posts</CardTitle>
              <Tabs defaultValue="scheduled">
                <TabsList>
                  <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                  <TabsTrigger value="published">Published</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <TabsContent value="scheduled" className="space-y-4">
                {upcomingPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div>
                        {getPlatformIcon(post.platform)}
                      </div>
                      <div>
                        <p className="font-medium">
                          {format(post.date, "MMMM d, yyyy")} • {post.time}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {post.content}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingPost(post)}
                      >
                        <Pencil className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="published" className="space-y-4">
                {publishedPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div>
                        {getPlatformIcon(post.platform)}
                      </div>
                      <div>
                        <p className="font-medium">
                          {format(post.date, "MMMM d, yyyy")} • {post.time}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {post.content}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">View Stats</Button>
                      <Button variant="ghost" size="sm">Repost</Button>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </CardContent>
          </Card>
        </div>
      </div>

      <CreatePostDialog
        isOpen={isCreateDialogOpen || !!editingPost}
        onOpenChange={(open) => {
          setIsCreateDialogOpen(open);
          if (!open) setEditingPost(null);
        }}
        existingPost={editingPost || undefined}
        onSubmit={editingPost ? handleEditPost : handleCreatePost}
      />
    </DashboardLayout>
  );
};

export default ContentCalendarPage;
