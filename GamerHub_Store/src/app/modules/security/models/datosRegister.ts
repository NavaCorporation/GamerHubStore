export class DatosRegister {
        profilePicture: string = '';
        firstName: string = '';
        lastName: string = '';
        email: string = '';
        userName: string = '';
        phoneNumber: string = '';
        password: string = '';
        confirmPassword: string = '';
        constructor( profilePicture: string, firstName: string, lastName: string, email: string, userName: string, phoneNumber: string, password: string, confirmPassword: string) {
            this.profilePicture = profilePicture;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.userName = userName;
            this.phoneNumber = phoneNumber;
            this.password = password;
            this.confirmPassword = confirmPassword;
        }
    }