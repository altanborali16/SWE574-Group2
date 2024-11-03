FROM openjdk:17.0.2-slim-bullseye

# Install Maven
RUN apt-get update && apt-get install -y maven

WORKDIR /app

# Copy all files into the container
COPY . .

# Build the application without running tests
RUN mvn clean install -DskipTests

# Run the application
CMD ["java", "-jar", "./target/devcomReborn-0.0.1-SNAPSHOT.jar"]
