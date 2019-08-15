# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select ProductId, CustomerId, ProductName, CustomerName 
from Products as p
join Customers as c
on p.productId = c.customerId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select OrderDate, OrderId, ShipperName
from Orders as o
join Shippers as s
on o.shipperId = s.shipperId 
where o.orderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select od.orderId, Quantity, ProductName
from OrderDetails as od
join Products as p
on od.productId = p.productId
where od.orderId = 10251
order by ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select o.orderId, c.customerName, e.lastName as EmployeeLastName
from Orders as o
join Customers as c
on o.customerId = c.customerId
join Employees as e
on o.employeeId = e.employeeId

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 