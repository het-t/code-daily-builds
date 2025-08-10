import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Heart, Brain, Lightbulb } from "lucide-react";

interface Writing {
  id: string;
  title: string;
  excerpt: string;
  category: "philosophy" | "non-academic" | "reflection" | "book-insights";
  date: string;
  mood: "thoughtful" | "inspired" | "contemplative" | "curious";
  readTime: number;
}

const mockWritings: Writing[] = [
  {
    id: "1",
    title: "On the Nature of Learning and Curiosity",
    excerpt: "What drives us to learn? Is it the satisfaction of understanding, the joy of discovery, or something deeper? Exploring the philosophical underpinnings of human curiosity and the eternal quest for knowledge.",
    category: "philosophy",
    date: "2024-01-15",
    mood: "contemplative",
    readTime: 5
  },
  {
    id: "2",
    title: "Lessons from 'Atomic Habits': Small Changes, Big Impact",
    excerpt: "James Clear's insights on habit formation have transformed how I approach daily routines. Here's how 1% improvements compound over time and why systems beat goals every time.",
    category: "book-insights",
    date: "2024-01-14",
    mood: "inspired",
    readTime: 7
  },
  {
    id: "3",
    title: "The Art of Slow Living in a Fast World",
    excerpt: "In our hyperconnected age, there's wisdom in slowing down. Reflecting on mindfulness, intentional living, and finding peace in the present moment despite the chaos around us.",
    category: "reflection",
    date: "2024-01-13",
    mood: "thoughtful",
    readTime: 6
  },
  {
    id: "4",
    title: "Why Stories Matter: Narrative and Human Connection",
    excerpt: "From ancient myths to modern novels, stories shape how we understand ourselves and others. Exploring why humans are fundamentally storytelling creatures and what this means for our digital age.",
    category: "non-academic",
    date: "2024-01-12",
    mood: "curious",
    readTime: 8
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "philosophy": return Brain;
    case "book-insights": return Lightbulb;
    case "reflection": return Heart;
    case "non-academic": return Quote;
    default: return Quote;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "philosophy": return "bg-accent text-accent-foreground";
    case "book-insights": return "bg-primary text-primary-foreground";
    case "reflection": return "bg-secondary text-secondary-foreground";
    case "non-academic": return "bg-success text-success-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const getMoodColor = (mood: string) => {
  switch (mood) {
    case "thoughtful": return "border-primary text-primary";
    case "inspired": return "border-accent text-accent";
    case "contemplative": return "border-secondary text-secondary";
    case "curious": return "border-success text-success";
    default: return "border-muted text-muted-foreground";
  }
};

export const PhilosophicalWritings = () => {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Thoughts & Reflections</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Philosophical musings, book insights, and reflections on life, learning, and everything in between
        </p>
      </div>

      <div className="grid gap-6">
        {mockWritings.map((writing) => {
          const CategoryIcon = getCategoryIcon(writing.category);
          return (
            <Card key={writing.id} className="shadow-card hover:shadow-elegant transition-all duration-300 group cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2">
                      <CategoryIcon className="h-4 w-4 text-primary" />
                      <Badge className={getCategoryColor(writing.category)} variant="secondary">
                        {writing.category.replace('-', ' ')}
                      </Badge>
                      <Badge variant="outline" className={getMoodColor(writing.mood)}>
                        {writing.mood}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                      {writing.title}
                    </CardTitle>
                  </div>
                  <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div>
                    {new Date(writing.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div>{writing.readTime} min read</div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {writing.excerpt}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-4 py-2 rounded-full">
          <Heart className="h-4 w-4" />
          Writing from the heart and mind
        </div>
      </div>
    </section>
  );
};