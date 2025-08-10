import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { CheckCircle, Circle, Book, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Mock data structure for daily entries
interface DailyEntry {
  date: string;
  tasksCompleted: number;
  totalTasks: number;
  hasReading: boolean;
  hasPhilosophical: boolean;
  mood: "excellent" | "good" | "neutral" | "challenging";
}

const mockDailyEntries: DailyEntry[] = [
  {
    date: "2024-01-15",
    tasksCompleted: 5,
    totalTasks: 7,
    hasReading: true,
    hasPhilosophical: false,
    mood: "good"
  },
  {
    date: "2024-01-14",
    tasksCompleted: 3,
    totalTasks: 5,
    hasReading: true,
    hasPhilosophical: true,
    mood: "excellent"
  },
  {
    date: "2024-01-13",
    tasksCompleted: 2,
    totalTasks: 4,
    hasReading: false,
    hasPhilosophical: true,
    mood: "neutral"
  }
];

const getMoodColor = (mood: string) => {
  switch (mood) {
    case "excellent": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "good": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "neutral": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "challenging": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

export const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const navigate = useNavigate();

  // Get entry for selected date
  const selectedEntry = selectedDate 
    ? mockDailyEntries.find(entry => entry.date === format(selectedDate, "yyyy-MM-dd"))
    : null;

  // Get dates that have entries for highlighting
  const entryDates = mockDailyEntries.map(entry => new Date(entry.date));

  const handleDateClick = (date: Date | undefined) => {
    if (date) {
      const dateStr = format(date, "yyyy-MM-dd");
      navigate(`/day/${dateStr}`);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Calendar Section */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Calendar</CardTitle>
          <CardDescription>
            Track your daily progress and select a date to view details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            modifiers={{
              hasEntry: entryDates
            }}
            modifiersStyles={{
              hasEntry: { 
                backgroundColor: "hsl(var(--primary))", 
                color: "hsl(var(--primary-foreground))",
                borderRadius: "0.375rem"
              }
            }}
            className="rounded-md border shadow-sm"
          />
        </CardContent>
      </Card>

      {/* Daily Summary Section */}
      <Card>
        <CardHeader>
          <CardTitle>
            {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "Select a Date"}
          </CardTitle>
          <CardDescription>
            {selectedEntry ? "Daily progress summary" : "No entry for this date"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {selectedEntry ? (
            <>
              {/* Mood Badge */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Mood:</span>
                <Badge className={getMoodColor(selectedEntry.mood)}>
                  {selectedEntry.mood}
                </Badge>
              </div>

              {/* Task Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Tasks Completed</span>
                  <span className="text-sm text-muted-foreground">
                    {selectedEntry.tasksCompleted}/{selectedEntry.totalTasks}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: selectedEntry.totalTasks }).map((_, i) => (
                    i < selectedEntry.tasksCompleted ? (
                      <CheckCircle key={i} className="h-4 w-4 text-green-600" />
                    ) : (
                      <Circle key={i} className="h-4 w-4 text-muted-foreground" />
                    )
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div className="space-y-2">
                <span className="text-sm font-medium">Activities:</span>
                <div className="flex gap-2">
                  {selectedEntry.hasReading && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Book className="h-3 w-3" />
                      Reading
                    </Badge>
                  )}
                  {selectedEntry.hasPhilosophical && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Brain className="h-3 w-3" />
                      Philosophy
                    </Badge>
                  )}
                </div>
              </div>

              {/* View Details Button */}
              <Button 
                onClick={() => handleDateClick(selectedDate)} 
                className="w-full"
              >
                View Full Details
              </Button>
            </>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>No entry recorded for this date.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => handleDateClick(selectedDate)}
              >
                Create Entry
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};