export interface Patient 
{
    id: string,
    name: string,
    age: string,
    gender: string,
    address: String,
    date: Date
    medications: Medication[],
    extraNotes: string | null;
}

export interface Medication{
    medicine: string
    mg: string,
    useType: string;
    route: string;
    days: string;
}