//content of this file is copied to the routers folder


// const incomeSchema = require("../models/IncomeModel");


// exports.addIncome = async(req,res) => {
//     const {title, amount, category, description, date} = req.body;

//     const income = Income ({
//         title, 
//         amount, 
//         category, 
//         description, 
//         date
//     })

//     try {
//         //Validation
//         if(!title || !amount || !category || !description || !date){
//             return res
//             .status(400)
//             .json({ message: 'All fields are required!'});
//         }
//         if(amount<=0 || !amount ==='number'){
//             return res
//             .status(400)
//             .json({ message: 'Amount should be a positive number!'});
//         }
//         await income
//         .save()
//         res.status(200).json({message: 'Income Added'})
//     } catch (error) {
//         // Handle the error
//         console.error(error);
//         res.status(500)
//         .json({ message: "Internal Server Error" });
//     }

//     console.log(income)
// }

// //module.exports = router;

// // exports.addIncome = async(req,res) => {
// //     const {title, amount, category, description, date} = req.body;

// //     const income = incomeSchema ({
// //         title, 
// //         amount, 
// //         category, 
// //         description, 
// //         date
// //     })

// //     try {
// //         //Validation
// //         if(!title || !amount || !category || !description || !date){
// //             return res
// //             .status(400)
// //             .json({ message: 'All fields are required!'});
// //         }
// //         if(amount<=0 || !amount ==='number'){
// //             return res
// //             .status(400)
// //             .json({ message: 'Amount should be a positive number!'});
// //         }
// //         await income
// //         .save()
// //         res.status(200).json({message: 'Income Added'})
// //     } catch (error) {
// //         // Handle the error
// //         console.error(error);
// //         res.status(500)
// //         .json({ message: "Internal Server Error" });
// //     }

// //     console.log(income)