import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen, Code, Trophy, Clock } from "lucide-react";

interface Update {
  id: string;
  date: string;
  reading: {
    book: string;
    pages: number;
    insights: string;
  };
  dsa: {
    problems: string[];
    concepts: string[];
    timeSpent: number;
  };
  mood: "excellent" | "good" | "okay" | "challenging";
}

const mockUpdates: Update[] = [
  {
    id: "1",
    date: "2024-01-15",
    reading: {
      book: "Clean Code by Robert Martin",
      pages: 25,
      insights: "Learned about meaningful naming conventions and their impact on code readability."
    },
    dsa: {
      problems: ["Two Sum", "Valid Parentheses"],
      concepts: ["Hash Maps", "Stack Operations"],
      timeSpent: 90
    },
    mood: "excellent"
  },
  {
    id: "2",
    date: "2024-01-14",
    reading: {
      book: "Clean Code by Robert Martin",
      pages: 22,
      insights: "Functions should be small and do one thing well. The concept of single responsibility principle."
    },
    dsa: {
      problems: ["Reverse Linked List", "Palindrome Number"],
      concepts: ["Linked Lists", "Two Pointers"],
      timeSpent: 75
    },
    mood: "good"
  },
  {
    id: "3",
    date: "2024-01-13",
    reading: {
      book: "Clean Code by Robert Martin",
      pages: 18,
      insights: "Code comments should explain why, not what. Clean code is self-documenting."
    },
    dsa: {
      problems: ["Binary Search", "First Bad Version"],
      concepts: ["Binary Search", "Array Manipulation"],
      timeSpent: 60
    },
    mood: "okay"
  }
];

const getMoodColor = (mood: string) => {
  switch (mood) {
    case "excellent": return "bg-success/10 text-success border-success/20";
    case "good": return "bg-primary/10 text-primary border-primary/20";
    case "okay": return "bg-accent/10 text-accent border-accent/20";
    case "challenging": return "bg-destructive/10 text-destructive border-destructive/20";
    default: return "bg-muted/10 text-muted-foreground border-muted/20";
  }
};

export const DailyUpdates = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Calendar className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Daily Updates</h2>
      </div>

      <div className="space-y-6">
        {mockUpdates.map((update, index) => (
          <Card key={update.id} className="p-6 bg-gradient-card border shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Date and Mood */}
              <div className="flex flex-col items-start gap-3 min-w-[160px]">
                <div className="text-lg font-semibold text-foreground">
                  {new Date(update.date).toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
                <Badge className={getMoodColor(update.mood)}>
                  {update.mood}
                </Badge>
              </div>

              {/* Content */}
              <div className="flex-1 grid lg:grid-cols-2 gap-6">
                {/* Reading Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Reading</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm text-muted-foreground">
                      {update.reading.book}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">{update.reading.pages} pages</span>
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      "{update.reading.insights}"
                    </p>
                  </div>
                </div>

                {/* DSA Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-success" />
                    <h3 className="font-semibold text-foreground">DSA Practice</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{update.dsa.timeSpent} minutes</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Problems Solved:</p>
                      <div className="flex flex-wrap gap-1">
                        {update.dsa.problems.map((problem, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {problem}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Concepts:</p>
                      <div className="flex flex-wrap gap-1">
                        {update.dsa.concepts.map((concept, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {concept}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};