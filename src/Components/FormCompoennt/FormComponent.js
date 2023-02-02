import { useForm } from "react-hook-form";

const FormComponent = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")} />
            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" onClick={() => {
                console.log("test")
            }} />
        </form>
    );
}

export default FormComponent;