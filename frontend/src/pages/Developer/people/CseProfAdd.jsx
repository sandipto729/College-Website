


import React from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import styles from './CseProfAdd.module.scss';
import {toast} from "react-toastify";
import SummaryApi from '../../../common';

function ProfessorForm() {
    const { register, handleSubmit, control,formState: { errors }  } = useForm({
        defaultValues: {
            ownEducation: [{ degree: "", institution: "", year: "" }],
            workExperience: [{ position: '', institution: '', duration: '' }],
            publications: [{ title: '', journal: '', year: '', link: '' }],
            doctoralStudents: [{ name: '', photo: '', type: '', subject: '' }],
            pgStudents: [{ name: '', photo: '', type: '', subject: '' }],
            ugStudents: [{ name: '', photo: '', type: '', subject: '' }],
            awardsAndRecognition: [{ title: '', year: '', organization: '' }],
            administrativeResponsibilities: [{ position: '', duration: '' }],
            teachingTopics: [' '],
            researchInterest: [' '],
            miscellaneous: [' ']
        }
    });

    // Field arrays
    const { fields: educationFields, append: educationAppend, remove: educationRemove } = useFieldArray({
        name: "ownEducation",
        control
    });

    const { fields: workFields, append: workAppend, remove: workRemove } = useFieldArray({
        name: "workExperience",
        control
    });

    const { fields: pubFields, append: pubAppend, remove: pubRemove } = useFieldArray({
        name: "publications",
        control
    });

    const { fields: doctoralFields, append: doctoralAppend, remove: doctoralRemove } = useFieldArray({
        name: "doctoralStudents",
        control
    });

    const { fields: pgFields, append: pgAppend, remove: pgRemove } = useFieldArray({
        name: "pgStudents",
        control
    });

    const { fields: ugFields, append: ugAppend, remove: ugRemove } = useFieldArray({
        name: "ugStudents",
        control
    });

    const { fields: awardFields, append: awardAppend, remove: awardRemove } = useFieldArray({
        name: 'awardsAndRecognition',
        control
    });

    const { fields: responsibilityFields, append: responsibilityAppend, remove: responsibilityRemove } = useFieldArray({
        name: 'administrativeResponsibilities',
        control
    });

    const { fields: teachingTopicFields, append: teachingTopicAppend, remove: teachingTopicRemove } = useFieldArray({
        name: 'teachingTopics',
        control
    });

    const { fields: researchFields, append: researchAppend, remove: researchRemove } = useFieldArray({
        name: 'researchInterest',
        control
    });

    const { fields: miscellaneousFields, append: miscellaneousAppend, remove: miscellaneousRemove } = useFieldArray({
        name: 'miscellaneous',
        control
    });

    const onSubmit = async(data) => {
        console.log(data);
        //store in local storage
        
        // backend add
        try{
            const response=await fetch(SummaryApi.CseProfAdd.url, {
                method: SummaryApi.CseProfAdd.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            })
    
            if(response.ok){
                toast.success('Professor added successfully')
            }else{
                toast.error('Failed to add professor')
            }
        }catch(error){
            toast.error(error.message)
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.profForm}>
            <h2>Professor Details</h2>

            {/* Name */}
            <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    {...register("name",{required:true})}
                    placeholder="Dr. John Doe"
                />
                {errors.name && <span className='text-red-500'>{'*This field is requiresd'}</span>}
            </div>

            {/* Photo */}
            <div className={styles.formGroup}>
                <label htmlFor="photo">Photo URL</label>
                <input
                    id="photo"
                    type="text"
                    {...register("photo")}
                    placeholder="https://example.com/photo.jpg"
                />
            </div>

            {/* Professor Type */}
            <div className={styles.formGroup}>
                <label htmlFor="professorType">Professor Type</label>
                <select id="professorType" {...register("professorType",{required:true})}>
                    <option value="">Select Type</option>
                    <option value="Full Professor">Full Professor</option>
                    <option value="Associate Professor">Associate Professor</option>
                    <option value="Assistant Professor">Assistant Professor</option>
                </select>
                {errors.professorType && <span className='text-red-500'>{'*This field is requiresd'}</span>}
            </div>

            {/* College Join Year */}
            <div className={styles.formGroup}>
                <label htmlFor="collegeJoinYear">College Join Year</label>
                <input
                    id="collegeJoinYear"
                    type="number"
                    {...register("collegeJoinYear",{required:true})}
                    placeholder="2010"
                />
                {errors.collegeJoinYear && <span className='text-red-500'>{'*This field is requiresd'}</span>}
            </div>

            {/* Social Media */}
            <h3>Social Media Links</h3>
            <div className={styles.socialMedia}>
                <div className={styles.formGroup}>
                    <label htmlFor="socialMedia.website">Website</label>
                    <input
                        id="socialMedia.website"
                        type="text"
                        {...register("socialMedia.website")}
                        placeholder="https://professorwebsite1.com"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="socialMedia.linkedin">LinkedIn</label>
                    <input
                        id="socialMedia.linkedin"
                        type="text"
                        {...register("socialMedia.linkedin")}
                        placeholder="https://linkedin.com/in/professor1"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="socialMedia.twitter">Twitter</label>
                    <input
                        id="socialMedia.twitter"
                        type="text"
                        {...register("socialMedia.twitter")}
                        placeholder="https://twitter.com/professor1"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="socialMedia.facebook">Facebook</label>
                    <input
                        id="socialMedia.facebook"
                        type="text"
                        {...register("socialMedia.facebook")}
                        placeholder="https://facebook.com/professor1"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="socialMedia.googleScholar">Google Scholar</label>
                    <input
                        id="socialMedia.googleScholar"
                        type="text"
                        {...register("socialMedia.googleScholar")}
                        placeholder="https://scholar.google.com/professor1"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="socialMedia.researchGate">ResearchGate</label>
                    <input
                        id="socialMedia.researchGate"
                        type="text"
                        {...register("socialMedia.researchGate")}
                        placeholder="https://researchgate.net/profile/professor1"
                    />
                </div>
            </div>

            {/* Education Section */}
            <h3>Education</h3>
            <div className={styles.fieldArray}>
                {educationFields.map((field, index) => (
                    <div key={field.id} className={styles.arrayItem}>
                        <div className={styles.formGroup}>
                            <label htmlFor={`ownEducation.${index}.degree`}>Degree</label>
                            <input
                                id={`ownEducation.${index}.degree`}
                                {...register(`ownEducation.${index}.degree`)}
                                defaultValue={field.degree}
                                placeholder="Degree"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`ownEducation.${index}.institution`}>Institution</label>
                            <input
                                id={`ownEducation.${index}.institution`}
                                {...register(`ownEducation.${index}.institution`)}
                                defaultValue={field.institution}
                                placeholder="Institution"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`ownEducation.${index}.year`}>Year</label>
                            <input
                                id={`ownEducation.${index}.year`}
                                {...register(`ownEducation.${index}.year`)}
                                defaultValue={field.year}
                                placeholder="Year"
                                type="number"
                            />
                        </div>

                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => educationRemove(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className={styles.addButton}
                    onClick={() => educationAppend({ degree: "", institution: "", year: "" })}
                >
                    Add Education
                </button>
            </div>

            {/* Work Experience Section */}
            <h3>Work Experience</h3>
            <div className={styles.fieldArray}>
                {workFields.map((field, index) => (
                    <div key={field.id} className={styles.arrayItem}>
                        <div className={styles.formGroup}>
                            <label htmlFor={`workExperience.${index}.position`}>Position</label>
                            <input
                                id={`workExperience.${index}.position`}
                                {...register(`workExperience.${index}.position`)}
                                defaultValue={field.position}
                                placeholder="Position"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`workExperience.${index}.institution`}>Institution</label>
                            <input
                                id={`workExperience.${index}.institution`}
                                {...register(`workExperience.${index}.institution`)}
                                defaultValue={field.institution}
                                placeholder="Institution"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`workExperience.${index}.duration`}>Duration</label>
                            <input
                                id={`workExperience.${index}.duration`}
                                {...register(`workExperience.${index}.duration`)}
                                defaultValue={field.duration}
                                placeholder="Duration"
                            />
                        </div>

                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => workRemove(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className={styles.addButton}
                    onClick={() => workAppend({ position: "", institution: "", duration: "" })}
                >
                    Add Work Experience
                </button>
            </div>

            {/* Research Interest Section */}
            <h3>Research Interest</h3>
            <div className={styles.fieldArray}>
                {researchFields.map((field, index) => (
                    <div key={index} className={styles.arrayItem}>
                        <div className={styles.formGroup}>
                            <label htmlFor={`researchInterest.${index}`}>Research Interest</label>
                            <input
                                id={`researchInterest.${index}`}
                                {...register(`researchInterest.${index}`)}
                                defaultValue={field}
                                placeholder="Research Interest"
                            />
                        </div>
                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => researchRemove(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className={styles.addButton}
                    onClick={() => researchAppend("")}
                >
                    Add Research Interest
                </button>
            </div>

            {/* publicationss Section */}
            <h3>publications</h3>
            <div className={styles.fieldArray}>
                {pubFields.map((field, index) => (
                    <div key={field.id} className={styles.arrayItem}>
                        <div className={styles.formGroup}>
                            <label htmlFor={`publications.${index}.title`}>Title</label>
                            <input
                                id={`publications.${index}.title`}
                                {...register(`publications.${index}.title`)}
                                defaultValue={field.title}
                                placeholder="Title"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`publications.${index}.journal`}>Journal</label>
                            <input
                                id={`publications.${index}.journal`}
                                {...register(`publications.${index}.journal`)}
                                defaultValue={field.journal}
                                placeholder="Journal"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`publications.${index}.year`}>Year</label>
                            <input
                                id={`publications.${index}.year`}
                                {...register(`publications.${index}.year`)}
                                defaultValue={field.year}
                                placeholder="Year"
                                type="number"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`publications.${index}.link`}>Link</label>
                            <input
                                id={`publications.${index}.link`}
                                {...register(`publications.${index}.link`)}
                                defaultValue={field.link}
                                placeholder="Link"
                            />
                        </div>

                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => pubRemove(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className={styles.addButton}
                    onClick={() => pubAppend({ title: "", journal: "", year: "", link: "" })}
                >
                    Add publications
                </button>
            </div>

            {/* Teaching Topics Section */}
            <h3>Teaching Topics</h3>
            <div className={styles.fieldArray}>
                {teachingTopicFields.map((field, index) => (
                    <div key={index} className={styles.arrayItem}>
                        <div className={styles.formGroup}>
                            <label htmlFor={`teachingTopics.${index}`}>Topic</label>
                            <input
                                id={`teachingTopics.${index}`}
                                {...register(`teachingTopics.${index}`)}
                                defaultValue={field}
                                placeholder="Topic"
                            />
                        </div>
                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => teachingTopicRemove(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className={styles.addButton}
                    onClick={() => teachingTopicAppend("")}
                >
                    Add Topic
                </button>
            </div>

            {/* Doctoral Students Section */}
            <h3>Doctoral Students</h3>
            <div className={styles.fieldArray}>
                {doctoralFields.map((field, index) => (
                    <div key={field.id} className={styles.arrayItem}>
                        <div className={styles.formGroup}>
                            <label htmlFor={`doctoralStudents.${index}.name`}>Name</label>
                            <input
                                id={`doctoralStudents.${index}.name`}
                                {...register(`doctoralStudents.${index}.name`)}
                                defaultValue={field.name}
                                placeholder="Name"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`doctoralStudents.${index}.photo`}>Photo URL</label>
                            <input
                                id={`doctoralStudents.${index}.photo`}
                                {...register(`doctoralStudents.${index}.photo`)}
                                defaultValue={field.photo}
                                placeholder="Photo URL"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`doctoralStudents.${index}.type`}>Type</label>
                            <input
                                id={`doctoralStudents.${index}.type`}
                                {...register(`doctoralStudents.${index}.type`)}
                                defaultValue={field.type}
                                placeholder="Type"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`doctoralStudents.${index}.subject`}>Subject</label>
                            <input
                                id={`doctoralStudents.${index}.subject`}
                                {...register(`doctoralStudents.${index}.subject`)}
                                defaultValue={field.subject}
                                placeholder="Subject"
                            />
                        </div>

                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => doctoralRemove(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className={styles.addButton}
                    onClick={() => doctoralAppend({ name: "", photo: "", type: "", subject: "" })}
                >
                    Add Student
                </button>
            </div>

            {/* PG Students Section */}
            <h3>PG Students</h3>
            <div className={styles.fieldArray}>
                {pgFields.map((field, index) => (
                    <div key={field.id} className={styles.arrayItem}>
                        <div className={styles.formGroup}>
                            <label htmlFor={`pgStudents.${index}.name`}>Name</label>
                            <input
                                id={`pgStudents.${index}.name`}
                                {...register(`pgStudents.${index}.name`)}
                                defaultValue={field.name}
                                placeholder="Name"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`pgStudents.${index}.photo`}>Photo URL</label>
                            <input
                                id={`pgStudents.${index}.photo`}
                                {...register(`pgStudents.${index}.photo`)}
                                defaultValue={field.photo}
                                placeholder="Photo URL"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`pgStudents.${index}.type`}>Type</label>
                            <input
                                id={`pgStudents.${index}.type`}
                                {...register(`pgStudents.${index}.type`)}
                                defaultValue={field.type}
                                placeholder="Type"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`pgStudents.${index}.subject`}>Subject</label>
                            <input
                                id={`pgStudents.${index}.subject`}
                                {...register(`pgStudents.${index}.subject`)}
                                defaultValue={field.subject}
                                placeholder="Subject"
                            />
                        </div>

                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => pgRemove(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className={styles.addButton}
                    onClick={() => pgAppend({ name: "", photo: "", type: "", subject: "" })}
                >
                    Add Student
                </button>
            </div>

            {/* UG Students Section */}
            <h3>UG Students</h3>
            <div className={styles.fieldArray}>
                {ugFields.map((field, index) => (
                    <div key={field.id} className={styles.arrayItem}>
                        <div className={styles.formGroup}>
                            <label htmlFor={`ugStudents.${index}.name`}>Name</label>
                            <input
                                id={`ugStudents.${index}.name`}
                                {...register(`ugStudents.${index}.name`)}
                                defaultValue={field.name}
                                placeholder="Name"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`ugStudents.${index}.photo`}>Photo URL</label>
                            <input
                                id={`ugStudents.${index}.photo`}
                                {...register(`ugStudents.${index}.photo`)}
                                defaultValue={field.photo}
                                placeholder="Photo URL"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`ugStudents.${index}.type`}>Type</label>
                            <input
                                id={`ugStudents.${index}.type`}
                                {...register(`ugStudents.${index}.type`)}
                                defaultValue={field.type}
                                placeholder="Type"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`ugStudents.${index}.subject`}>Subject</label>
                            <input
                                id={`ugStudents.${index}.subject`}
                                {...register(`ugStudents.${index}.subject`)}
                                defaultValue={field.subject}
                                placeholder="Subject"
                            />
                        </div>

                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => ugRemove(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className={styles.addButton}
                    onClick={() => ugAppend({ name: "", photo: "", type: "", subject: "" })}
                >
                    Add Student
                </button>
            </div>

            {/* Awards and Recognition Section */}
            <h3>Awards and Recognition</h3>
            <div className={styles.fieldArray}>
                {awardFields.map((field, index) => (
                    <div key={field.id} className={styles.arrayItem}>
                        <div className={styles.formGroup}>
                            <label htmlFor={`awardsAndRecognition.${index}.title`}>Title</label>
                            <input
                                id={`awardsAndRecognition.${index}.title`}
                                {...register(`awardsAndRecognition.${index}.title`)}
                                defaultValue={field.title}
                                placeholder="Title"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`awardsAndRecognition.${index}.year`}>Year</label>
                            <input
                                id={`awardsAndRecognition.${index}.year`}
                                {...register(`awardsAndRecognition.${index}.year`)}
                                defaultValue={field.year}
                                placeholder="Year"
                                type="number"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`awardsAndRecognition.${index}.organization`}>Organization</label>
                            <input
                                id={`awardsAndRecognition.${index}.organization`}
                                {...register(`awardsAndRecognition.${index}.organization`)}
                                defaultValue={field.organization}
                                placeholder="Organization"
                            />
                        </div>

                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => awardRemove(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className={styles.addButton}
                    onClick={() => awardAppend({ title: "", year: "", organization: "" })}
                >
                    Add Award
                </button>
            </div>

            {/* Administrative Responsibilities Section */}
            <h3>Administrative Responsibilities</h3>
            <div className={styles.fieldArray}>
                {responsibilityFields.map((field, index) => (
                    <div key={field.id} className={styles.arrayItem}>
                        <div className={styles.formGroup}>
                            <label htmlFor={`administrativeResponsibilities.${index}.position`}>Position</label>
                            <input
                                id={`administrativeResponsibilities.${index}.position`}
                                {...register(`administrativeResponsibilities.${index}.position`)}
                                defaultValue={field.position}
                                placeholder="Position"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={`administrativeResponsibilities.${index}.duration`}>Duration</label>
                            <input
                                id={`administrativeResponsibilities.${index}.duration`}
                                {...register(`administrativeResponsibilities.${index}.duration`)}
                                defaultValue={field.duration}
                                placeholder="Duration"
                            />
                        </div>

                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => responsibilityRemove(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className={styles.addButton}
                    onClick={() => responsibilityAppend({ position: "", duration: "" })}
                >
                    Add Responsibility
                </button>
            </div>

            {/* Contact Details Section */}
            <h3>Contact Details</h3>
            <div className={styles.contactDetails}>
                <div className={styles.formGroup}>
                    <label htmlFor="contact.email">Email</label>
                    <input
                        id="contact.email"
                        type="email"
                        {...register("contact.email")}
                        placeholder="email@example.com"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="contact.phone">Phone</label>
                    <input
                        id="contact.phone"
                        type="tel"
                        {...register("contact.phone")}
                        placeholder="+1234567890"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="contact.office">Office Address</label>
                    <input
                        id="contact.office"
                        type="text"
                        {...register("contact.office")}
                        placeholder="Office Address"
                    />
                </div>
            </div>

            {/* Miscellaneous Section */}
            <h3>Miscellaneous</h3>
            <div className={styles.fieldArray}>
                {miscellaneousFields.map((field, index) => (
                    <div key={index} className={styles.arrayItem}>
                        <div className={styles.formGroup}>
                            <label htmlFor={`miscellaneous.${index}`}>Miscellaneous</label>
                            <input
                                id={`miscellaneous.${index}`}
                                {...register(`miscellaneous.${index}`)}
                                defaultValue={field}
                                placeholder="Miscellaneous"
                            />
                        </div>
                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => miscellaneousRemove(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className={styles.addButton}
                    onClick={() => miscellaneousAppend("")}
                >
                    Add Miscellaneous
                </button>
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
    );
}

export default ProfessorForm;
