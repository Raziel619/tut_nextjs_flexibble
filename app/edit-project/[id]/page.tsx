import { ProjectInterface } from "@/common.types";
import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getProjectDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

const EditProject = async ({ params: { id } }: { params: { id: string } }) => {
  const result = (await getProjectDetails(id)) as {
    project?: ProjectInterface;
  };

  const session = await getCurrentUser();
  if (!session?.user) redirect("/");

  return (
    <Modal>
      <h3 className="modal-head-text">Edit Project</h3>

      <ProjectForm type="create" session={session} project={result?.project} />
    </Modal>
  );
};

export default EditProject;
