import * as yup from "yup";

const techModalSchema = yup.object().shape({
  title: yup.string().required(),
  status: yup.string().required(),
});

export default techModalSchema;
