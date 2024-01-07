"use client";

type ProjectInfoProps = {
  projects: any;
  projectDetails: any;
};

export default function ProjectInfo({
  projects,
  projectDetails,
}: ProjectInfoProps) {
  return (
    <div className="w-1/2">
      <ul className="space-y-4 text-stone-800 mb-4 list-disc">
        <li>
          <span className="font-bold mr-2">{projects.projectName}</span>
          {projectDetails.title}
        </li>
        <li>
          <span className="font-bold mr-2">{projects.projectType}</span>
          {projectDetails.type}
        </li>
        <li>
          <span className="font-bold mr-2">{projects.projectFunction}</span>
          {projectDetails.function}
        </li>
        <li>
          <span className="font-bold mr-2">{projects.projectParticipants}</span>
          {projectDetails.participants}
        </li>
      </ul>
      <p className="text-sm text-stone-600">{projectDetails.description}</p>
    </div>
  );
}
