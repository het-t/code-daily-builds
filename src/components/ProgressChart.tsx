import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Flame } from "lucide-react";

export const ProgressChart = () => {
  const currentStreak = 125;
  const weeklyGoal = 7;
  const completedThisWeek = 5;
  const monthlyProblems = 48;
  const monthlyGoal = 60;

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <TrendingUp className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Progress Overview</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Current Streak */}
        <Card className="p-6 bg-gradient-card border shadow-card hover:shadow-elegant transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <Flame className="h-8 w-8 text-destructive" />
            <Badge variant="secondary">Active</Badge>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Current Streak</h3>
            <div className="text-3xl font-bold text-destructive">{currentStreak}</div>
            <p className="text-sm text-muted-foreground">Consecutive days</p>
          </div>
        </Card>

        {/* Weekly Progress */}
        <Card className="p-6 bg-gradient-card border shadow-card hover:shadow-elegant transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <Target className="h-8 w-8 text-primary" />
            <Badge variant="outline">{Math.round((completedThisWeek / weeklyGoal) * 100)}%</Badge>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Weekly Goal</h3>
            <div className="text-3xl font-bold text-primary">
              {completedThisWeek}/{weeklyGoal}
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-500" 
                style={{ width: `${(completedThisWeek / weeklyGoal) * 100}%` }}
              />
            </div>
          </div>
        </Card>

        {/* Monthly Problems */}
        <Card className="p-6 bg-gradient-card border shadow-card hover:shadow-elegant transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-success" />
            <Badge variant="outline">{Math.round((monthlyProblems / monthlyGoal) * 100)}%</Badge>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Monthly Problems</h3>
            <div className="text-3xl font-bold text-success">
              {monthlyProblems}/{monthlyGoal}
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-success h-2 rounded-full transition-all duration-500" 
                style={{ width: `${(monthlyProblems / monthlyGoal) * 100}%` }}
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Insights */}
      <Card className="p-6 bg-gradient-hero border shadow-elegant">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-white">This Month's Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90">
            <div>
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm opacity-80">New Concepts Learned</div>
            </div>
            <div>
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm opacity-80">Books Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold">92%</div>
              <div className="text-sm opacity-80">Consistency Rate</div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};