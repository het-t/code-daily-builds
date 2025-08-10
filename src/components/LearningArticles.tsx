import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, TrendingUp } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  date: string;
  tags: string[];
}

const mockArticles: Article[] = [
  {
    id: "1",
    title: "Understanding Dynamic Programming: From Recursion to Optimization",
    excerpt: "A deep dive into dynamic programming concepts, starting from basic recursion and building up to optimized solutions. We'll explore memoization, tabulation, and when to use each approach.",
    category: "Data Structures & Algorithms",
    readTime: 8,
    date: "2024-01-15",
    tags: ["Dynamic Programming", "Optimization", "Algorithms"]
  },
  {
    id: "2",
    title: "Binary Trees: Traversal Patterns and Problem-Solving Strategies",
    excerpt: "Exploring different tree traversal methods and how they apply to solving complex problems. From basic inorder/preorder/postorder to level-order traversal and their use cases.",
    category: "Data Structures & Algorithms",
    readTime: 6,
    date: "2024-01-14",
    tags: ["Binary Trees", "Traversal", "Problem Solving"]
  },
  {
    id: "3",
    title: "System Design Fundamentals: Scalability and Load Balancing",
    excerpt: "Key concepts in designing scalable systems. Understanding horizontal vs vertical scaling, load balancing strategies, and how to design systems that can handle millions of users.",
    category: "System Design",
    readTime: 12,
    date: "2024-01-13",
    tags: ["System Design", "Scalability", "Architecture"]
  },
  {
    id: "4",
    title: "React Patterns: Composition vs Inheritance",
    excerpt: "Exploring React's composition model and why it's preferred over inheritance. Practical examples of how to build flexible and reusable components using composition patterns.",
    category: "Frontend Development",
    readTime: 10,
    date: "2024-01-12",
    tags: ["React", "Design Patterns", "Component Architecture"]
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Data Structures & Algorithms": return "bg-primary text-primary-foreground";
    case "System Design": return "bg-accent text-accent-foreground";
    case "Frontend Development": return "bg-secondary text-secondary-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

export const LearningArticles = () => {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Learning Articles</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          In-depth technical articles and learning notes from my coding journey
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {mockArticles.map((article) => (
          <Card key={article.id} className="shadow-card hover:shadow-elegant transition-all duration-300 group cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <Badge className={getCategoryColor(article.category)} variant="secondary">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </div>
                <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime} min read
                </div>
                <div>
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-sm leading-relaxed">
                {article.excerpt}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-4 py-2 rounded-full">
          <TrendingUp className="h-4 w-4" />
          New articles added regularly
        </div>
      </div>
    </section>
  );
};