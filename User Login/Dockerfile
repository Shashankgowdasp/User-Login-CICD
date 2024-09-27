# Use an official Windows Server Core image as a parent image
FROM mcr.microsoft.com/windows/servercore:ltsc2019

# Install IIS (web server)
RUN powershell.exe Install-WindowsFeature -name Web-Server -IncludeManagementTools

# Copy your HTML files to the default IIS folder
COPY . /inetpub/wwwroot

# Expose port 80 for web traffic
EXPOSE 80

# Start IIS
CMD ["powershell.exe", "Start-Service", "w3svc", ";", "Start-Sleep", "-s", "86400"]
