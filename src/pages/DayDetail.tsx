import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Circle, Clock, Book, Brain, Target } from "lucide-react";
import { format, parseISO } from "date-fns";

// Mock detailed data for a specific day
const getMockDayData = (dateStr: string) => {
  // This would typically come from a database/API
  return {
    date: dateStr,
    mood: "good",
    tasks: {
      completed: [
        { id: 1, title: "Binary Search Tree Implementation", category: "DSA", priority: "high", timeSpent: "2h" },
        { id: 2, title: "Dynamic Programming - Coin Change", category: "DSA", priority: "medium", timeSpent: "1.5h" },
        { id: 3, title: "Read Chapter 3 - Clean Code", category: "Reading", priority: "medium", timeSpent: "45min" }
      ],
      planned: [
        { id: 4, title: "Graph Algorithms - DFS/BFS", category: "DSA", priority: "high" },
        { id: 5, title: "System Design Reading", category: "Reading", priority: "low" }
      ]
    },
    learningArticles: [
      {
        id: 1,
        title: "Understanding Binary Search Trees",
        summary: "Deep dive into BST operations, balancing, and real-world applications",
        tags: ["data-structures", "algorithms", "trees"],
        timeToRead: "5 min",
        insights: "The key insight was understanding how self-balancing trees maintain O(log n) operations even with skewed input data."
      }
    ],
    philosophicalWritings: [
      {
        id: 1,
        title: "On the Nature of Learning",
        summary: "Reflection on the continuous process of knowledge acquisition and its impact on personal growth",
        tags: ["learning", "growth", "philosophy"],
        timeToRead: "3 min",
        keyThought: "Learning is not just about accumulating information, but about transforming our understanding of the world."
      }
    ],
    reflection: "Today was productive. The BST implementation went smoother than expected, and I'm starting to see patterns in tree-based algorithms. Need to focus more on system design concepts tomorrow."
  };
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "DSA": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Reading": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "System Design": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    case "medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "low": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

const getMoodColor = (mood: string) => {
  switch (mood) {
    case "excellent": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "good": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "neutral": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "challenging": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

const DayDetail = () => {
  const { date } = useParams<{ date: string }>();
  const navigate = useNavigate();

  if (!date) {
    return <div>Invalid date</div>;
  }

  const dayData = getMockDayData(date);
  const formattedDate = format(parseISO(date), "EEEE, MMMM d, yyyy");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero border-b">
        <div className="container max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Calendar
            </Button>
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                {formattedDate}
              </h1>
              <Badge className={`mt-2 ${getMoodColor(dayData.mood)}`}>
                Mood: {dayData.mood}
              </Badge>
            </div>
            <div className="w-24" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-12 space-y-8">
        {/* Tasks Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="h-6 w-6" />
            Daily Tasks
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Completed Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Completed ({dayData.tasks.completed.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dayData.tasks.completed.map((task) => (
                  <div key={task.id} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{task.title}</h4>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge className={getCategoryColor(task.category)}>
                        {task.category}
                      </Badge>
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                      <span className="text-muted-foreground">{task.timeSpent}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Planned Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600 flex items-center gap-2">
                  <Circle className="h-5 w-5" />
                  Planned ({dayData.tasks.planned.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dayData.tasks.planned.map((task) => (
                  <div key={task.id} className="p-3 border rounded-lg opacity-70">
                    <h4 className="font-medium mb-2">{task.title}</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge className={getCategoryColor(task.category)}>
                        {task.category}
                      </Badge>
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learning Articles */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Book className="h-6 w-6" />
            Learning Articles
          </h2>
          <div className="space-y-4">
            {dayData.learningArticles.map((article) => (
              <Card key={article.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{article.title}</CardTitle>
                      <CardDescription className="mt-2">{article.summary}</CardDescription>
                    </div>
                    <Badge variant="secondary">{article.timeToRead}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Key Insight:</p>
                      <p className="text-sm">{article.insights}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Philosophical Writings */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Brain className="h-6 w-6" />
            Philosophical Writings
          </h2>
          <div className="space-y-4">
            {dayData.philosophicalWritings.map((writing) => (
              <Card key={writing.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{writing.title}</CardTitle>
                      <CardDescription className="mt-2">{writing.summary}</CardDescription>
                    </div>
                    <Badge variant="secondary">{writing.timeToRead}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      {writing.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Key Thought:</p>
                      <p className="text-sm italic">{writing.keyThought}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Daily Reflection */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Daily Reflection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">{dayData.reflection}</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default DayDetail;