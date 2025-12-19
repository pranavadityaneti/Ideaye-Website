import React, { useState } from 'react';
import { Home } from './components/Home';
import { ProjectDetail } from './components/ProjectDetail';
import { CaseStudies } from './components/CaseStudies';
import { PROJECTS } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'project' | 'case-studies'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = (projectId: string) => {
    const project = PROJECTS.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      setCurrentView('project');
    }
  };

  const handleBack = () => {
    setCurrentView('home');
    setSelectedProject(null);
  };

  const navigateProject = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;

    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    let nextIndex;

    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % PROJECTS.length;
    } else {
      nextIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    }

    setSelectedProject(PROJECTS[nextIndex]);
  };

  if (currentView === 'project' && selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        onBack={handleBack}
        onNext={() => navigateProject('next')}
        onPrev={() => navigateProject('prev')}
      />
    );
  }

  if (currentView === 'case-studies') {
    return (
      <CaseStudies
        onBack={() => setCurrentView('home')}
        onProjectSelect={handleProjectSelect}
      />
    );
  }

  return (
    <Home
      onProjectSelect={handleProjectSelect}
      onNavToCaseStudies={() => setCurrentView('case-studies')}
    />
  );
};

export default App;