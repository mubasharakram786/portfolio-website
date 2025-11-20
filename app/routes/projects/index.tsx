import ProjectCard from "~/components/ProjectCard";
import type { Route } from "./+types/index"
import type { Project } from "~/types";
export async function loader ({request}:Route.LoaderArgs):Promise<{project:Project[]}>{
    const res = await fetch('http://localhost:8000/projects');
    const data = await res.json();
    return {projects:data}
}
const ProjectPage = ({loaderData}:Route.ComponentProps) => {
    const {projects} = loaderData as {project:Project[]}; 
    console.log(projects)
  return (
    <>

      <div className='text-3xl text-white mb-8'>🚀 Projects</div>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project)=>(
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  )
}

export default ProjectPage