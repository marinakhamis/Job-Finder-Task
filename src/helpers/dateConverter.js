export default function convertDate(isoDate) {
    // Dates from API  is coming in ISO Format so we have to convert it
    let extractedDate = isoDate.split("T")[0];
    let convertDate = extractedDate.toString().replaceAll('-', '/')

    console.log(convertDate)

    var today = new Date();
    var createdOn = new Date(convertDate);
    var msInDay = 24 * 60 * 60 * 1000;

    createdOn.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0)

    var diff = (+today - +createdOn) / msInDay
    console.log(diff)
}
// export default function convertDate() {
//     let isoDate = "2013-03-10T02:00:00Z";

//     let extractedDate = isoDate.split("T")[0];

//     console.log(extractedDate.toString());


//     let convertDate = extractedDate.toString().replaceAll('-', '/')

//     console.log(convertDate)

//     var today = new Date();
//     var createdOn = new Date(convertDate);
//     var msInDay = 24 * 60 * 60 * 1000;

//     createdOn.setHours(0, 0, 0, 0);
//     today.setHours(0, 0, 0, 0)

//     var diff = (+today - +createdOn) / msInDay
//     console.log(diff)
// }