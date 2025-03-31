
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Instagram, Twitter, Facebook, Linkedin, ThumbsUp, MessageCircle, Repeat } from "lucide-react";

// Mock data
const engagementData = {
  comments: [
    {
      id: 1,
      platform: "twitter",
      user: {
        name: "Sarah Johnson",
        handle: "@sarahj",
        avatar: "",
      },
      content: "Love this update! Can't wait to try it out.",
      time: "2h ago",
      post: "Check out our latest product update! #ProductLaunch",
    },
    {
      id: 2,
      platform: "instagram",
      user: {
        name: "Mike Davis",
        handle: "@mikedavis",
        avatar: "",
      },
      content: "Great photo! What camera do you use?",
      time: "4h ago",
      post: "Behind the scenes at our office. #CompanyCulture",
    },
    {
      id: 3,
      platform: "facebook",
      user: {
        name: "Emily Wang",
        handle: "Emily Wang",
        avatar: "",
      },
      content: "Just signed up for the webinar. Looking forward to it!",
      time: "1d ago",
      post: "Join our upcoming webinar on social media trends.",
    },
  ],
  mentions: [
    {
      id: 1,
      platform: "twitter",
      user: {
        name: "Tech Daily",
        handle: "@techdaily",
        avatar: "",
      },
      content: "Check out @yourbrand's latest announcement about their new features.",
      time: "5h ago",
    },
    {
      id: 2,
      platform: "linkedin",
      user: {
        name: "Jane Smith",
        handle: "Jane Smith",
        avatar: "",
      },
      content: "Excited to see what @yourbrand is doing in the tech space.",
      time: "1d ago",
    },
  ],
  likes: [
    {
      id: 1,
      platform: "instagram",
      count: 243,
      post: "Behind the scenes at our office. #CompanyCulture",
      time: "2d ago",
    },
    {
      id: 2,
      platform: "twitter",
      count: 128,
      post: "Check out our latest product update! #ProductLaunch",
      time: "1d ago",
    },
    {
      id: 3,
      platform: "facebook",
      count: 89,
      post: "Join our upcoming webinar on social media trends.",
      time: "12h ago",
    },
  ],
};

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

export function RecentEngagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Engagement</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="comments">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="comments">
              <MessageCircle className="h-4 w-4 mr-2" />
              Comments
            </TabsTrigger>
            <TabsTrigger value="mentions">
              <Repeat className="h-4 w-4 mr-2" />
              Mentions
            </TabsTrigger>
            <TabsTrigger value="likes">
              <ThumbsUp className="h-4 w-4 mr-2" />
              Likes
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="comments" className="mt-4 space-y-4">
            {engagementData.comments.map((comment) => (
              <div key={comment.id} className="flex space-x-4">
                <Avatar>
                  <AvatarImage src={comment.user.avatar} />
                  <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <span className="font-medium mr-2">{comment.user.name}</span>
                    <span className="text-sm text-muted-foreground mr-2">
                      {comment.user.handle}
                    </span>
                    {getPlatformIcon(comment.platform)}
                  </div>
                  <p className="text-sm">{comment.content}</p>
                  <p className="text-xs text-muted-foreground">
                    On: "{comment.post}" • {comment.time}
                  </p>
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="mentions" className="mt-4 space-y-4">
            {engagementData.mentions.map((mention) => (
              <div key={mention.id} className="flex space-x-4">
                <Avatar>
                  <AvatarImage src={mention.user.avatar} />
                  <AvatarFallback>{mention.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <span className="font-medium mr-2">{mention.user.name}</span>
                    <span className="text-sm text-muted-foreground mr-2">
                      {mention.user.handle}
                    </span>
                    {getPlatformIcon(mention.platform)}
                  </div>
                  <p className="text-sm">{mention.content}</p>
                  <p className="text-xs text-muted-foreground">{mention.time}</p>
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="likes" className="mt-4 space-y-4">
            {engagementData.likes.map((like) => (
              <div key={like.id} className="flex items-center space-x-4 p-2 border rounded-md">
                <div className="bg-secondary rounded-full p-2">
                  <ThumbsUp className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{like.count} likes</p>
                  <p className="text-sm text-muted-foreground">"{like.post}"</p>
                </div>
                <div className="flex items-center space-x-2">
                  {getPlatformIcon(like.platform)}
                  <span className="text-xs text-muted-foreground">{like.time}</span>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
