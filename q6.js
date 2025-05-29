db.employees.updateOne({ email: "john@gmail.com" }, { $set: { age: 23 } });
db.employees.find().sort({ salary: -1 }).limit(3);
db.employees.updateMany({}, { $inc: { salary: 1000 } });
db.employees.insertOne({
  name: "Alice Smith",
  salary: 42000,
  department: "admin",
  position: "HR Executive", 
  date: Date(), 
});
db.employees.deleteMany({ department: "admin" });
