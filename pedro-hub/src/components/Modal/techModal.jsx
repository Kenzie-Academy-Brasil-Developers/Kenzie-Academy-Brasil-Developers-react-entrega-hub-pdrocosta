import StyledModal from "../../styles/styleModal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect } from "react";
import techModalSchema from "./techModalSchema";
import Input from "../Input/input";
import { TechContext } from "../../providers/techContext";

const TechModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(techModalSchema),
  });
  const { createTech } = useContext(TechContext);

  const { openModal, stateModal, setStateModal } = useContext(TechContext);

  const techInputs = (techformInput) => {
    createTech(techformInput);
    reset();
  };

  return (
    <>
      {stateModal && (
        <StyledModal>
          <section>
            <div>
              <p className="p_register_tech">Register Tech</p>
              <button
                type="button"
                className="btn_closemodal"
                onClick={() => setStateModal(false)}
              >
                X
              </button>
            </div>

            <form onSubmit={handleSubmit(techInputs)}>
              <Input
                type="text"
                placeholder="Type your tech"
                label="Name"
                error={errors.title}
                register={register("title")}
              />
              <p className="p_choose">Choose Status</p>
              <select
                name="select_tech"
                id="select_tech"
                {...register("status")}
              >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediario</option>
                <option value="Avançado">Avancado</option>
              </select>
              <button className="btn_submit" type="submit">
                Register Tech
              </button>
            </form>
          </section>
        </StyledModal>
      )}
    </>
  );
};

export default TechModal;
