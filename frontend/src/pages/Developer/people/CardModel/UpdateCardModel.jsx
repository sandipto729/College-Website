import { useFieldArray, useForm } from 'react-hook-form'
import styles from './UpdateCardModel.module.scss'
import { useState } from 'react';

function ResearchInterest(prop) {
    const {register,append,remove,fields}=prop;

return (
    <div>
    {
        fields.map((field, index) => (
            <div key={field.id} className={styles.formInput}>
                <textarea
                    {...register(`researchInterests.${index}.value`)} // Dynamically register each textarea
                    placeholder="Enter Research Interest..."
                    rows="3"
                    className="border rounded p-1 w-full overflow-y-scroll"
                ></textarea>
                <div className='flex flex-row justify-between w-full'>
                    <button
                        type="button" // Prevent form submission
                        className='w-1/3 bg-red-500 rounded-md h-8'
                        onClick={() => remove(index)} // Remove the specific field by index
                    >
                        Delete
                    </button>
                </div>
            </div>
        ))
    }
    </div>
)
}



function UpdateCardModel({SetUpdateCardMOdel,faculty }) {
        const {register,handleSubmit,control}=useForm()
        const {append,fields,remove}=useFieldArray({
            control,
            name:'researchInterests'
        })
        const [imagePreview, setImagePreview] = useState(faculty.photo);
        const [selectedFile, setSelectedFile] = useState(null);
    
        // Handle file input and set preview
        const handleImageChange = (e) => {
            const file = e.target.files[0];
            if (file) {
                setSelectedFile(file);
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImagePreview(reader.result); // Display preview
                };
                reader.readAsDataURL(file);
            }
        };
    
        const DisplayFormData = (data) => {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('professorType', data.professorType);
            formData.append('email', data.email);
            formData.append('phone', data.phone);
            formData.append('collegeJoinYear', data.collegeJoinYear);
            
            data.researchInterests.forEach((interest, index) => {
                formData.append(`researchInterests[${index}]`, interest.value);
            });
    
            if (selectedFile) {
                formData.append('photo', selectedFile); // Append the image file if selected
            }
    
            for (const pair of formData.entries()) {
                console.log(pair[0], pair[1]); // Log key and value pairs
            }
            
            // Send formData to backend here
        };

        return (
    <div className={styles.container}>
        <form className={styles.formData} onSubmit={handleSubmit(DisplayFormData)}>
            <div className='flex flex-row justify-center'>
                <div >
                <img  className="w-28 h-28 rounded-full object-cover" src={imagePreview?imagePreview:faculty.photo} alt={`Profile of ${faculty.name}`}/>
                <div className='w-full'><label htmlFor="photo" className='w-full bg-green-500 rounded-md h-8'>Change Photo</label></div>
                <input type="file"  accept=".jpg, .jpeg, .png" id="photo"  className="hidden" onChange={handleImageChange}/>
                </div>
            </div>
    <div className={styles.formInput}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name"  placeholder={faculty.name} {...register('name')}/>
    </div>
        <div className={styles.formInput}>
            <label htmlFor="photo">Professor</label>
            <input type="text" name="professorType" placeholder={faculty.professorType} {...register('professorType')}/>      
        </div>

        <div>
        <label htmlFor="photo">Research Interest</label>
        <ResearchInterest  register={register}  append={append}  remove={remove} fields={fields} />
        <button className='w-1/3 bg-green-500 rounded-md h-8' onClick={()=>append({value:''})}>Add</button>
        </div>

        <div className={styles.formInput}>
            <label htmlFor="photo">Email</label>
            <input type="text" name="email" placeholder={faculty.email} {...register('email')}/>      
        </div>
        <div className={styles.formInput}>
            <label htmlFor="photo">Phone</label>
            <input type="text" name="phone" placeholder={faculty.phone} {...register('phone')}/>
        </div>
        <div className={styles.formInput}>
            <label htmlFor="photo">College Join Year</label>
            <input type="text" name="collegeJoinYear" placeholder={faculty.collegeJoinYear} {...register('collegeJoinYear')}/>
        </div>          
        <button type="submit" className={styles.submitButton}>Submit</button>
        <button  onClick = {()=>SetUpdateCardMOdel(false)}  className={styles.submitButton}>Back</button>
        </form>

    </div>
)

}

export default UpdateCardModel