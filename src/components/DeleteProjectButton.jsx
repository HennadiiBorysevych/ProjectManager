import React from "react";
import { useNavigate } from "react-router-dom";

import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "../queries/ProjectQueries";
import { DELETE_PROJECT } from "../mutations/projectMutation";
import { useMutation } from "@apollo/client";

const DeleteProjectButton = ({ projectId }) => {
  const nav = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => nav("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={deleteProject}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
