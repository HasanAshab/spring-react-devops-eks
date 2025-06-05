FROM maven:3.8.5-eclipse-temurin-11 AS builder

# set working directory
WORKDIR /app

# download maven dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# build application
COPY src ./src
RUN mvn install


FROM builder AS dev

# run app
CMD [ "mvn", "spring-boot:run" ]

FROM builder AS prepare-production
RUN mkdir -p target/dependency
WORKDIR /app
RUN jar -xf ../*.jar

FROM eclipse-temurin:11-jre-focal AS prod
EXPOSE 8080
VOLUME /tmp

COPY --from=prepare-production /app/BOOT-INF/lib /app/lib
COPY --from=prepare-production /app/META-INF /app/META-INF
COPY --from=prepare-production $/app/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","com.company.project.Application"]