// 3 types are ====> 
    // abstract class             interface           types

/**************************************************************************************************/
interface player {
    name: string;
    dob: Date;
    position: string;
    country:string;
}

interface stadiumOperations {
    cleanPitch():boolean;
    bookTickets():any;
    bookedTickets:number;
    availableTickets:number;
}




/***************************************************************************************************/