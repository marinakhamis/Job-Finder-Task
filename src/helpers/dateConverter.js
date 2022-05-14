export default function convertDate(isoDate) {
    // Dates from API  is coming in ISO Format so we have to convert it
    let extractedDate = isoDate.split("T")[0];
    let convertDate = extractedDate.toString().replaceAll('-', '/')
    var today = new Date();
    var createdOn = new Date(convertDate);
    var msInDay = 24 * 60 * 60 * 1000;

    createdOn.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0)

    var diff = (+today - +createdOn) / msInDay
    // console.log(diff)
    return diff
}
