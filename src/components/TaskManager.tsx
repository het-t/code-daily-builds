import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Calendar, Target } from "lucide-react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  category: "dsa" | "reading" | "general";
  priority: "high" | "medium" | "low";
}

interface TaskData {
  date: string;
  completed: Task[];
  planned: Task[];
  reflection: string;
}

const mockTaskData: TaskData[] = [
  {
    date: "2024-01-15",
    completed: [
      { id: "1", title: "Solved Binary Tree Inorder Traversal", completed: true, category: "dsa", priority: "high" },
      { id: "2", title: "Read 20 pages of 'Clean Code'", completed: true, category: "reading", priority: "medium" },
      { id: "3", title: "Morning workout", completed: true, category: "general", priority: "low" }
    ],
    planned: [
      { id: "4", title: "Study Dynamic Programming", completed: false, category: "dsa", priority: "high" },
      { id: "5", title: "Write learning notes on Trees", completed: false, category: "general", priority: "medium" },
      { id: "6", title: "Read philosophy article", completed: false, category: "reading", priority: "low" }
    ],
    reflection: "Great progress today! Binary tree traversal clicked finally. Need to focus more on DP concepts tomorrow."
  },
  {
    date: "2024-01-14",
    completed: [
      { id: "7", title: "Solved 3 Array problems", completed: true, category: "dsa", priority: "high" },
      { id: "8", title: "Finished chapter on Functions", completed: true, category: "reading", priority: "medium" }
    ],
    planned: [
      { id: "9", title: "Review Hash Tables", completed: false, category: "dsa", priority: "medium" },
      { id: "10", title: "Plan weekly goals", completed: false, category: "general", priority: "low" }
    ],
    reflection: "Solid day for problem solving. Arrays are getting easier with practice."
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "dsa": return "bg-primary text-primary-foreground";
    case "reading": return "bg-accent text-accent-foreground";
    case "general": return "bg-secondary text-secondary-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "border-destructive text-destructive";
    case "medium": return "border-yellow-500 text-yellow-600 dark:text-yellow-400";
    case "low": return "border-success text-success";
    default: return "border-muted text-muted-foreground";
  }
};

export const TaskManager = () => {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Daily Tasks & Planning</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Track your daily accomplishments and plan ahead for continuous progress
        </p>
      </div>

      <div className="grid gap-6">
        {mockTaskData.map((dayData, index) => (
          <Card key={dayData.date} className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  {new Date(dayData.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </CardTitle>
                <Badge variant="secondary">
                  {dayData.completed.length} completed
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Completed Tasks */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Completed Today
                </h4>
                <div className="space-y-2">
                  {dayData.completed.map((task) => (
                    <div key={task.id} className="flex items-center gap-3 p-3 rounded-lg bg-success/5 border border-success/20">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="flex-1 text-sm">{task.title}</span>
                      <div className="flex gap-2">
                        <Badge className={getCategoryColor(task.category)} variant="secondary">
                          {task.category}
                        </Badge>
                        <Badge variant="outline" className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Planned Tasks */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  Planned Next
                </h4>
                <div className="space-y-2">
                  {dayData.planned.map((task) => (
                    <div key={task.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border">
                      <Circle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="flex-1 text-sm">{task.title}</span>
                      <div className="flex gap-2">
                        <Badge className={getCategoryColor(task.category)} variant="secondary">
                          {task.category}
                        </Badge>
                        <Badge variant="outline" className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Reflection */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Daily Reflection</h4>
                <p className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-border italic">
                  "{dayData.reflection}"
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};