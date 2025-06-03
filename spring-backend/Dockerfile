# Use slim OpenJDK 11 base image
FROM openjdk:11-jdk-slim

# Set working directory
WORKDIR /app

COPY . .
RUN ./mvnw clean package

# Copy the built JAR file into the container
# COPY target/app.jar app.jar

# Expose application port (change if not 8080)
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
ENTRYPOINT [ "sleep", "infinity" ]