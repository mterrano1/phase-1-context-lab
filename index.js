/* Your Code Here */

function createEmployeeRecord(array){
    const employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}

function createEmployeeRecords(arrays){
    const employeeData = arrays.map(createEmployeeRecord)
    return employeeData
}

// function createEmployeeRecords(arrays){
//     const employeeData = arrays.map(array => createEmployeeRecord(array))
//     return employeeData
// }

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    const timeObj = {
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    }
    this.timeInEvents.push(timeObj)
    return this
}

function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    const timeObj = {
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    }
    this.timeOutEvents.push(timeObj)
    return this
}

function hoursWorkedOnDate(date){
    let findTimeInDate = this.timeInEvents.find(obj => obj.date === date);
    let startTime = findTimeInDate.hour;
    let findTimeOutDate = this.timeOutEvents.find(obj => obj.date === date);
    let endTime = findTimeOutDate.hour;
    return (endTime - startTime) / 100;
}

// const jamesBond = {
//     firstName: 'James',
//     familyName: 'Bond',
//     title: 'spy',
//     payPerHour: 100,
//     timeInEvents: [{type: 'TimeIn', hour: 1400, date: '2014-02-28'}, {type: 'TimeIn', hour: 0800, date: '2014-03-22'}],
//     timeOutEvents: [{type: 'TimeOut', hour: 2200, date: '2014-02-28'}, {type: 'TimeOut', hour: 1700, date: '2014-03-22'}],
// }

function wagesEarnedOnDate(date){
    let hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName){
    let findName = srcArray.map(name => name.firstName.toLowerCase() === firstName.toLowerCase());
    return findName
}

function calculatePayroll(array){
    array.map(object => {
        let findDates = object.timeInEvents.map(findDates => findDates.date);
        findDates.forEach(date => {
            let totalWages = wagesEarnedOnDate(date)
            console.log(totalWages)
        })
    })
} 

// function calculatePayroll(array){
//     array.map(object => {
//         let findDates = object.timeInEvents.map(findDates => findDates.date);
//         findDates.forEach(date => {
//             let totalWages = wagesEarnedOnDate(object, date)
//         })
//     })
// } 