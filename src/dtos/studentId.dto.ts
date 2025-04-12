import { IsDefined, IsNotEmpty } from "class-validator";

export class StudentIdDto {

    // Student ID fields
    @IsNotEmpty()
    studentNumber: string;

    @IsNotEmpty()
    studentFullName: string;

    studentBirthDate: string; 
    studentPhone: string;
    studentEmail: string;

    studentPhoto: string;

    // Parent/Emergency Contact fields
    guardianName: string;
    guardianPhone: string;
    guardianEmail: string;
    
    emergencyName: string;
    emergencyPhone: string;
    emergencyEmail: string;

    // Student registration fields
    program: string;
    
    gradeLevel: string;
    
    graduationDate: string;

    @IsNotEmpty()
    // School ID fields
    schoolName: string;
    
    schoolContact: string;
    
    schoolPhone: string;

    // Barcode fields
    barcodeType: string;
    
    barcode: string;
    
    qrCode: string;

    // Credential fields
    @IsNotEmpty()
    expiration: string;
}