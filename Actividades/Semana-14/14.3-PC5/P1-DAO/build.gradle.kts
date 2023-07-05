plugins {
    id("java")
}

group = "org.jhaner"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(platform("org.junit:junit-bom:5.9.1"))
    testImplementation("org.junit.jupiter:junit-jupiter")
    implementation("org.postgresql:postgresql:9.3-1100-jdbc4")
}

tasks.test {
    useJUnitPlatform()
}