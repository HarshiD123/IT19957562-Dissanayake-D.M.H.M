$(document).ready(function() {

	$("#alertSuccess").hide();
	$("#alertError").hide();

});

function validateItemForm() {
	
	// Account number------------------------
	if ($("#intType").val().trim() == "") {
		return "Insert Interruption Type.";
	}
	// PRICE-------------------------------
	if ($("#title").val().trim() == "") {
		return "Insert Title.";
	}
	if ($("#description").val().trim() == "") {
		return "Insert Description.";
	}

	if ($("#approval").val().trim() == "") {
		return "Insert Approval.";
	}
	
	if ($("#interruptionStartDate").val().trim() == "") {
		return "Insert Interruption Start Date.";
	}
	
	if ($("#interruptionEndDate").val().trim() == "") {
		return "Insert Interruption End Date.";
	}
	
	return true;

}

//Save Func
function onInterruptionSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	$("#hidInterruptionIDSave").val("");
	$("#formInterruption")[0].reset();
}


// Save Btn
$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------  
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation-------------------  
	var status = validateItemForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	// If valid------------------------  
	var type = ($("#hidInterruptionIDSave").val() == "") ? "POST" : "PUT";

	$.ajax(
		{
			url: "Interruption",
			type: type,
			data: $("#formInterruption").serialize(),
			dataType: "text",
			complete: function(response, status) {
				onInterruptionSaveComplete(response.responseText, status);
			}
		});
});


// UPDATE CLICK
$(document).on("click", ".btnUpdate", function(event) {
	$("#hidInterruptionIDSave").val($(this).closest("tr").find('#hidInterruptionIDUpdate').val());
	$("#intType").val($(this).closest("tr").find('td:eq(0)').text());
	$("#title").val($(this).closest("tr").find('td:eq(1)').text());
	$("#description").val($(this).closest("tr").find('td:eq(2)').text());
	$("#approval").val($(this).closest("tr").find('td:eq(3)').text());
	$("#interruptionStartDate").val($(this).closest("tr").find('td:eq(4)').text());
	$("#interruptionEndDate").val($(this).closest("tr").find('td:eq(5)').text());
	
});


//Delete Func
function onItemDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}


// DELETE Click
$(document).on("click", ".btnRemove", function(event) {
	$.ajax(
		{
			url: "Interruption",
			type: "DELETE",
			data: "id=" + $(this).data("id"),
			dataType: "text",
			complete: function(response, status) {
				onItemDeleteComplete(response.responseText, status);
			}
		});
});
