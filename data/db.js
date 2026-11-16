// Document ->match -> grouping ->Projection -> Aggregation -> Filter -> Sort -> Limit -> Skip

// db.students.aggregate([
//     {
//         $match: { age: { $gte: 20 } }
//     },

//     {
//         $count: "total_students"
//     }     
// ])

{
    name: "Amit",
    skills: ["JavaScript", "Node.js", "MongoDB"],
}

Amit - JavaScript
Amit - Node.js 
Amit - MongoDB

// db.students.aggregate([
//     {
//         $unwind: "$skills"
//     },
//     {
//         $group: {
//             _id: "$skills",
//             studentCount: { $sum: 1 }
//         }
//     }
// ])



db.tours.insertMany([{name:"City Exploration",description:"Discover the vibrant city life and cultural landmarks.",destination:"Maldives",duration:"2 days",price:199},{name:"Safari Adventure",description:"Experience the thrill of a wildlife safari and encounter exotic animals.",destination:"Kenya",duration:"4 days",price:399},{name:"Safari Adventure",description:"Experience the thrill of a wildlife safari and encounter exotic animals.",destination:"Kenya",duration:"4 days",price:400},{name:"Safari Adventure",description:"Experience the thrill of a wildlife safari and encounter exotic animals.",destination:"Kenya",duration:"4 days",price:400}])


// db.students.aggregate([
//     {
//         $lookup: {
//             from:"courses",
//             localField:"courseId",
//             foreignField:"courseId",
//             as:"courseDetails"
//         }
//     }
// ])


db.employees.insertMany([
    {
        name: "Amit",
        department: "Engineering",
        salary: 80000,
        age: 25
    },
    {
        name: "Priya",
        department: "Engineering",
        salary: 95000,
        age: 28
    },
    {
        name: "Rahul",
        department: "HR",
        salary: 60000,
        age: 30
    },
    {
        name: "Neha",
        department: "Engineering",
        salary: 110000,
        age: 32
    },
    {
        name: "Ravi",
        department: "HR",
        salary: 70000,
        age: 26
    }
])


db.employees.aggregate([

    // --------------------------------
    // STEP 1: Filter employees - salatry greater than 70000
    // --------------------------------
    {
        $match: {
            salary: {
                $gt: 70000
            }
        }
    },

    // --------------------------------
    // STEP 2: Group by department
    // --------------------------------
    {
        $group: {
            _id: "$department",

            // Number of employees
            employeeCount: {
                $sum: 1
            },

            // Average salary
            averageSalary: {
                $avg: "$salary"
            },

            // Maximum salary
            maximumSalary: {
                $max: "$salary"
            }
        }
    },

    // --------------------------------
    // STEP 3: Sort by average salary
    // --------------------------------
    {
        $sort: {
            averageSalary: -1
        }
    },

    // --------------------------------
    // STEP 4: Take top 2
    // --------------------------------
    {
        $limit: 2
    },

    // --------------------------------
    // STEP 5: Format output
    // --------------------------------
    {
        $project: {
            _id: 0,

            department: "$_id",

            employeeCount: 1,

            averageSalary: 1,

            maximumSalary: 1
        }
    }

])