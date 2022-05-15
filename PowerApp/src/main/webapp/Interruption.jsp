<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="com.Interruption"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>ElectroGrid</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.4.1.min.js"></script>
<script src="Components/main.js"></script>
</head>
<body>
 	<div class="container">
		<div class="card">
			<div class="card-header bg-info text-light d-flex align-items-center">
				<h1>Interruption Details</h1>
			</div>
			<div class="card-body">
				<form id="formInterruption" name="formInterruption" method="post" action="Interruption.jsp">
					Interruption Type: <input id="intType" name="intType" type="text"
						class="form-control form-control-sm"> <br> 
					Title: <input id="title" name="title" type="text"
						class="form-control form-control-sm"> <br>
					Description: <input id="description" name="description" type="text"
						class="form-control form-control-sm"> <br> 
					Approval: <input id="approval" name="approval" type="text"
						class="form-control form-control-sm"> <br>
					Interruption Start Date : <input id="interruptionStartDate" name="interruptionStartDate" type="date"
						class="form-control form-control-sm"><br> 
					Interruption End Date: <input id="interruptionEndDate" name="interruptionEndDate" type="date"
						class="form-control form-control-sm"> <br>
					<div class="text-right">
						<input id="btnSave" name="btnSave" type="button" value="SAVE"
							class="btn btn-primary"> <input type="hidden"
							id="hidInterruptionIDSave" name="hidInterruptionIDSave" value="">
					</div>
				</form> <br>
				<div id="alertSuccess" class="alert alert-success" style="margin-top: 15px"></div>
				<div id="alertError" class="alert alert-danger" style="margin-top: 15px"></div>
				<div id="divItemsGrid" class="table-responsive">
					<%
					Interruption Interruption1 = new Interruption();
					out.print(Interruption1.readInterruption());
					%>
				</div>
			</div>

		</div>
	</div>
</body>
</html>