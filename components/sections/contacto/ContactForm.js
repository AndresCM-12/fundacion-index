import { useForm } from "react-hook-form";
import Button from "@/components/common/Button";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const options = {
        from: data.email, // sender address
        to: process.env.NEXT_PUBLIC_SMTP_RECEIVER, // list of receivers
        subject: "Nuevo Mensaje en Fundación Index Web ", // Subject line
        text: `Hay un nuevo mensaje mandado desde el formulario del sitio web de fundación index \n 
            Acá los datos: 
            
            Nombre: ${data.nombre} 
            Apellido: ${data.apellido} 
            Email: ${data.email} 
            Teléfono: ${data.telefono} 
            Empresa: ${data.empresa} 
            Pertenese a una empresa de industria de la exportación: ${
              data.empresa_manufacturera
            } 
            Me Interesa: ${data.meinteresa.replaceAll("-", " ")} \n
            Mensaje: ${data.mensaje} 
            `,
      };

      await axios.post("/api/sendemail", options);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setError("Ocurrió un error al enviar el mensaje");
    }
    setLoading(false);
  };

  return (
    <div className="supercontainer w-full flex justify-center bg-white">
      <div className="w-full max-w-7xl px-8 ">
        <div className="formcontainer text-albra">
          <h2 className="font-bold text-4xl mb-14 mt-20">Formulario</h2>

          {success ? (
            <p className="text-green-600 text-lg font-bold pb-24">
              Hemos Recibido tu mensaje exitosamente.
            </p>
          ) : (
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <div className="textareacontainer mb-8">
                <textarea
                  placeholder="Mensaje"
                  rows="4"
                  id="mensaje"
                  className="bg-index-gray text-albra border-0 rounded-2xl w-full "
                  {...register("mensaje", {
                    required: {
                      value: true,
                      message: "El mensaje es obligatorio",
                    },
                  })}
                />
                {errors.mensaje && (
                  <p className="text-red-600 text-xs italic">
                    {errors.mensaje.message}
                  </p>
                )}
              </div>
              <div className="wrapper flex flex-col lg:flex-row w-full">
                {/* LEFT SECTION */}
                <div className="leftcontainer w-full lg:w-1/2 pr-12">
                  {" "}
                  <div className="inputcontainer w-full mb-4">
                    <input
                      type="text"
                      placeholder="Nombre"
                      id="nombre"
                      className="bg-index-gray text-albra border-0 rounded-full py-3 w-full  px-4"
                      {...register("nombre", {
                        required: {
                          value: true,
                          message: "El nombre es obligatorio",
                        },
                      })}
                    />
                    {errors.nombre && (
                      <p className="text-red-600 text-xs italic pl-4 pt-2">
                        {errors.nombre.message}
                      </p>
                    )}
                  </div>
                  <div className="inputcontainer w-full mb-4">
                    <input
                      type="text"
                      placeholder="Apellido"
                      id="apellido"
                      className="bg-index-gray text-albra border-0 rounded-full py-3 w-full  px-4"
                      {...register("apellido", {
                        required: {
                          value: true,
                          message: "El apellido es obligatorio",
                        },
                      })}
                    />
                    {errors.apellido && (
                      <p className="text-red-600 text-xs italic pl-4 pt-2">
                        {errors.apellido.message}
                      </p>
                    )}
                  </div>
                  <div className="inputcontainer w-full mb-4">
                    <input
                      type="text"
                      placeholder="Teléfono"
                      id="telefono"
                      className="bg-index-gray text-albra border-0 rounded-full py-3 w-full  px-4"
                      {...register("telefono", {
                        required: {
                          value: true,
                          message: "El teléfono es obligatorio",
                        },
                      })}
                    />
                    {errors.telefono && (
                      <p className="text-red-600 text-xs italic pl-4 pt-2">
                        {errors.telefono.message}
                      </p>
                    )}
                  </div>
                  <div className="radioinput">
                    <div className="radioinput w-full border-b-2 border-index-gray my-4">
                      <label className="font-albra font-semibold  w-full pr-4">
                        Me interesa:
                      </label>
                    </div>
                    <div className="radiodata mb-8">
                      <fieldset className="mt-4">
                        <div className="flex items-center">
                          <input
                            name="meinteresa"
                            type="radio"
                            value="sumarme-como-empresa-donante"
                            className="focus:ring-index-blue-default h-4 w-4 text-index-blue-default border-gray-300"
                            {...register("meinteresa", {
                              required: {
                                value: true,
                                message: "El campo es obligatorio",
                              },
                            })}
                          />
                          <label className="ml-4 block  font-albra ">
                            Sumarme como empresa donante
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="mt-4">
                        <div className="flex items-center">
                          <input
                            name="meinteresa"
                            type="radio"
                            value="sumarme-como-donante-individual"
                            className="focus:ring-index-blue-default h-4 w-4 text-index-blue-default border-gray-300"
                            {...register("meinteresa", {
                              required: {
                                value: true,
                                message: "El campo es obligatorio",
                              },
                            })}
                          />
                          <label className="ml-4 block  font-albra ">
                            Sumarme como donante individual
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="mt-4">
                        <div className="flex items-center">
                          <input
                            name="meinteresa"
                            type="radio"
                            value="solicitar-mas-informacion-de-la-organizacion"
                            className="focus:ring-index-blue-default h-4 w-4 text-index-blue-default border-gray-300"
                            {...register("meinteresa", {
                              required: {
                                value: true,
                                message: "El campo es obligatorio",
                              },
                            })}
                          />
                          <label className="ml-4 block  font-albra ">
                            Solicitar más información acerca de la organización.
                          </label>
                        </div>
                      </fieldset>
                      {errors.meinteresa && (
                        <p className="text-red-600 text-xs italic pl-4 pt-2">
                          {errors.meinteresa.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* RIGHTSECTION */}
                <div className="rightcontainer w-full lg:w-1/2">
                  <div className="radioinput">
                    <div className="radioinput w-full border-b-2 border-index-gray my-4">
                      <label className="font-albra font-semibold w-full pr-4">
                        Perteneces a una empresa de la industria de la exportación:
                      </label>
                    </div>
                    <div className="radiodata mb-8">
                      <fieldset className="mt-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="empresa_manufacturera"
                            value="si"
                            {...register("empresa_manufacturera", {
                              required: {
                                value: true,
                                message: "El campo es obligatorio",
                              },
                            })}
                            className="focus:ring-index-blue-default h-4 w-4 text-index-blue-default border-gray-300"
                          />
                          <label className="ml-4 block  font-albra ">Si</label>
                        </div>
                      </fieldset>
                      <fieldset className="mt-4">
                        <div className="flex items-center">
                          <input
                            name="empresa_manufacturera"
                            type="radio"
                            value="no"
                            {...register("empresa_manufacturera", {
                              required: {
                                value: true,
                                message: "El campo es obligatorio",
                              },
                            })}
                            className="focus:ring-index-blue-default h-4 w-4 text-index-blue-default border-gray-300"
                          />
                          <label className="ml-4 block font-albra ">No</label>
                        </div>
                      </fieldset>
                      {errors.empresa_manufacturera && (
                        <p className="text-red-600 text-xs italic pl-4 pt-2">
                          {errors.empresa_manufacturera.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="inputcontainer w-full mb-4">
                    <input
                      type="text"
                      placeholder="Empresa"
                      id="empresa"
                      className="bg-index-gray text-albra border-0 rounded-full py-3 w-full  px-4"
                      {...register("empresa", {
                        required: {
                          value: true,
                          message: "Empresa es obligatorio",
                        },
                      })}
                    />
                    {errors.empresa && (
                      <p className="text-red-600 text-xs italic pl-4 pt-2">
                        {errors.empresa.message}
                      </p>
                    )}
                  </div>
                  <div className="inputcontainer w-full mb-4">
                    <input
                      type="text"
                      placeholder="Email"
                      id="email"
                      className="bg-index-gray text-albra border-0 rounded-full py-3 w-full  px-4"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "El email es obligatorio",
                        },
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Escribe un correo válido",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs italic pl-4 pt-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="labelfinal w-full px-2  mb-4 mt-8 lg:mb-8">
                    <label className="font-albra font-semibold w-full pr-4">
                      Es necesario completar todos los campos.*
                    </label>
                  </div>
                </div>
              </div>
              {error && (
                <p className="text-red-600 text-sm font-bold pb-4 mt-8">
                  {error}
                </p>
              )}

              <div className="buttoncontainer mb-8">
                {loading ? (
                  <p className="text-index-aqua">Enviando...</p>
                ) : (
                  <Button
                    label="Enviar"
                    type="submit"
                    appearance="outlineblue"
                    className={`lg:w-48 w-full pt-4 pb-4 my-4 `}
                  />
                )}
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
