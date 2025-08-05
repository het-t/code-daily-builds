import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

export const ProfileCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Profile Image */}
      <div className="relative group">
        <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-elegant bg-gradient-card border">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Your Name
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Software Engineer & DSA Enthusiast
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Data Structures</Badge>
            <Badge variant="secondary">Algorithms</Badge>
            <Badge variant="secondary">Daily Learning</Badge>
          </div>
        </div>

        <div className="prose prose-lg text-foreground">
          <p>
            Welcome to my learning journey! I'm passionate about mastering data structures and algorithms 
            while maintaining consistent reading habits. This site tracks my daily progress and insights.
          </p>
        </div>

        {/* Contact & Social Links */}
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="sm" className="gap-2">
            <Mail className="h-4 w-4" />
            your.email@example.com
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Github className="h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="text-center p-4 rounded-lg bg-gradient-card border">
            <div className="text-2xl font-bold text-primary">125</div>
            <div className="text-sm text-muted-foreground">Days Streak</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-card border">
            <div className="text-2xl font-bold text-success">48</div>
            <div className="text-sm text-muted-foreground">Problems Solved</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-card border">
            <div className="text-2xl font-bold text-accent">12</div>
            <div className="text-sm text-muted-foreground">Books Read</div>
          </div>
        </div>
      </div>
    </div>
  );
};