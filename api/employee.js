export default class EmployeeAPI {
  
  constructor(request, baseURL, cookie) {
    this.request = request;
    this.baseURL = baseURL;
    this.cookie = cookie;
  }

  async getEmployeeDetails(employeeId) {
    const response = await this.request.get(`${this.baseURL}/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&employeeId=${employeeId}`, {
      headers: {
        Cookie: this.cookie,
      },
    });
    console.log(response.status());
    
    if (!response.ok()) {
      throw new Error(`Failed to get employee details for ID ${employeeId}`);
    }
    return response;
  }
}