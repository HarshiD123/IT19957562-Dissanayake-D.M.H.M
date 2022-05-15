package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/Interruption")
public class InterruptionAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;

	Interruption interruption = new Interruption();
    
    public InterruptionAPI() {
    	super();
        // TODO Auto-generated constructor stub
    }

 // INSERT
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String output = interruption.insertInterruption(request.getParameter("intType"),
				request.getParameter("title"), request.getParameter("description"), request.getParameter("approval"),
				request.getParameter("interruptionStartDate"), request.getParameter("interruptionEndDate"));
		response.getWriter().write(output);
	}

	// UPDATE
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map<String, String> paras = getParasMap(request);
		String output = interruption.updateInterruption(paras.get("hidInterruptionIDSave").toString(), paras.get("intType").toString(),
				paras.get("title").toString(), paras.get("description").toString(), paras.get("approval").toString(),
				paras.get("interruptionStartDate").toString(), paras.get("interruptionEndDate").toString());
		response.getWriter().write(output);
	}

	// DELETE
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map<String, String> paras = getParasMap(request);
		String output = interruption.deleteInterruption(paras.get("id").toString());
		response.getWriter().write(output);
	}
	
	public static Map<String, String> getParasMap(HttpServletRequest request) {
		Map<String, String> map = new HashMap<String, String>();
		try {
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			String[] params = queryString.split("&");
			for (String param : params) {
				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		} catch (Exception e) {
		}
		return map;
	}
}
