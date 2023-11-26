FROM openjdk
WORKDIR /app
COPY target/model-vehicles-0.0.1-SNAPSHOT.jar /app/model-vehicles.jar
ENTRYPOINT ["java", "-jar", "model-vehicles.jar"]