import { ProfileCard } from "@/components/ProfileCard";
import { DailyUpdates } from "@/components/DailyUpdates";
import { ProgressChart } from "@/components/ProgressChart";
import { TaskManager } from "@/components/TaskManager";
import { LearningArticles } from "@/components/LearningArticles";
import { PhilosophicalWritings } from "@/components/PhilosophicalWritings";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero border-b">
        <div className="container max-w-6xl mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-white animate-fade-in">
              Learning Journey
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Daily progress in Data Structures & Algorithms and continuous reading habits
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Profile Section */}
        <section className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <ProfileCard />
        </section>

        {/* Progress Overview */}
        <section className="animate-fade-in" style={{ animationDelay: '600ms' }}>
          <ProgressChart />
        </section>

        {/* Task Management */}
        <section className="animate-fade-in" style={{ animationDelay: '800ms' }}>
          <TaskManager />
        </section>

        {/* Learning Articles */}
        <section className="animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <LearningArticles />
        </section>

        {/* Philosophical Writings */}
        <section className="animate-fade-in" style={{ animationDelay: '1200ms' }}>
          <PhilosophicalWritings />
        </section>

        {/* Daily Updates */}
        <section className="animate-fade-in" style={{ animationDelay: '1400ms' }}>
          <DailyUpdates />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t">
        <div className="container max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>© 2024 Learning Journey. Built with passion for continuous improvement.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
