import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"

export default function PatientList() {

    const patients = usePatientStore(state => state.patients)

    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Patient List</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Manage Your {''}
                        <span className="text-indigo-600 font-bold">Patients and Appointments</span>    
                        {patients.map( patient => (
                            <PatientDetails 
                                key={patient.id} 
                                patient={patient}
                            />
                        ))}
                    </p>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">There are no patients</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Start by adding patients {''}
                        <span className="text-indigo-600 font-bold">and they will appear in this place</span>
                    </p>
                </>
            )}
        </div>
    )
}
