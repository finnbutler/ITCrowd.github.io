import java.util.LinkedList;
import java.io.File;
import java.io.FileWriter;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Scanner;

import org.json.*;
import javax.json.*;

/**
 * Creates converted SQL INSERT script or JSON database file out of all pet data in "data/" folder.
 */
public class ParsePetData {
    public static void main(String[] args) {
        LinkedList<PetData> allPetData = new LinkedList<>();

        // Read JSON files
        File dataFolder = new File("data/");
        File[] jsonFiles = dataFolder.listFiles();

        assert jsonFiles != null;
        assert jsonFiles.length > 0;
        for (File jsonFile : jsonFiles) {
            StringBuilder jsonString = new StringBuilder();
            try {
                Scanner scanner = new Scanner(jsonFile);
                while (scanner.hasNextLine()) {
                    jsonString.append(scanner.nextLine());
                }
            } catch (FileNotFoundException e) {
                System.out.println("Invalid json file");
                e.printStackTrace();
            }

            // Parse JSON into PetData
            JSONObject json = new JSONObject(jsonString.toString());
            JSONArray animals = json.getJSONArray("animals");
            for (int i = 0; i < animals.length(); i++) {
                JSONObject animal = animals.getJSONObject(i);

                int id = animal.getInt("id");

                String type = getJSONStringNulls(animal, "type");
                String species = getJSONStringNulls(animal, "species");
                String name = getJSONStringNulls(animal, "name");
                String description = getJSONStringNulls(animal, "description");

                JSONObject breeds = animal.getJSONObject("breeds");
                String breedPrimary = getJSONStringNulls(breeds, "primary");
                String breedSecondary = getJSONStringNulls(breeds, "secondary");
                Boolean breedIsMixed = getJSONBooleanNulls(breeds, "mixed");
                Boolean breedIsUnknown = getJSONBooleanNulls(breeds, "unknown");

                JSONObject colours = animal.getJSONObject("colors");
                String colourPrimary = getJSONStringNulls(colours, "primary");
                String colourSecondary = getJSONStringNulls(colours, "secondary");
                String colourTertiary = getJSONStringNulls(colours, "tertiary");

                String age = getJSONStringNulls(animal, "age");
                String birthDate = null;
                String sex = getJSONStringNulls(animal, "gender");
                String size = getJSONStringNulls(animal, "size");
                String coat = getJSONStringNulls(animal, "coat");

                JSONObject attributes = animal.getJSONObject("attributes");
                JSONObject environment = animal.getJSONObject("environment");
                Boolean isSpayedOrNeutered = getJSONBooleanNulls(attributes, "spayed_neutered");
                Boolean isHouseTrained = getJSONBooleanNulls(attributes, "house_trained");
                Boolean isDeclawed = getJSONBooleanNulls(attributes, "declawed");
                Boolean isSpecialNeeds = getJSONBooleanNulls(attributes, "special_needs");
                Boolean isShotsCurrent = getJSONBooleanNulls(attributes, "shots_current");
                Boolean isFriendlyToChildren = getJSONBooleanNulls(environment, "children");
                Boolean isFriendlyToDogs = getJSONBooleanNulls(environment, "dogs");
                Boolean isFriendlyToCats = getJSONBooleanNulls(environment, "cats");

                JSONArray photos = animal.getJSONArray("photos");
                LinkedList<PhotoData> photos_out = new LinkedList<>();
                for (int j = 0; j < photos.length(); j++) {
                    JSONObject photo = photos.getJSONObject(j);
                    String small = getJSONStringNulls(photo, "small");
                    String medium = getJSONStringNulls(photo, "medium");
                    String large = getJSONStringNulls(photo, "large");
                    String full = getJSONStringNulls(photo, "full");

                    PhotoData photoData = new PhotoData(small, medium, large, full);
                    photos_out.add(photoData);
                }

                PetData petData = new PetData(id, type, species, name, description,
                        breedPrimary, breedSecondary, breedIsMixed, breedIsUnknown,
                        colourPrimary, colourSecondary, colourTertiary,
                        age, birthDate, sex, size, coat,
                        isSpayedOrNeutered, isHouseTrained, isDeclawed, isSpecialNeeds,
                        isShotsCurrent, isFriendlyToChildren, isFriendlyToDogs, isFriendlyToCats,
                        photos_out);
                petData.trimPetDescription();
                allPetData.add(petData);
            }
        }

        writeToJson(allPetData);
    }

    private static void writeToSQL(List<PetData> pets) {
        // Write to SQL file
        try {
            FileWriter writer = new FileWriter("output/pets.sql");

            // Write PetData
            for (PetData petData : pets) {
                writer.write(petData.toSQLPet());
            }

            writer.write("\n");

            // Write PhotoData
            for (PetData petData : pets) {
                writer.write(petData.toSQLPhotos());
            }

            writer.close();
        } catch (IOException e) {
            System.out.println("Error writing file");
            e.printStackTrace();
        }
    }

    private static void writeToJson(List<PetData> pets) {
        // Write to JSON file
        try {
            JsonArrayBuilder petArray = Json.createArrayBuilder();
            int petsWritten = 0;

            for (PetData petData : pets) {
                if (petData.getPhotos().size() > 0) {
                    petArray.add(petData.toJsonObject());
                    petsWritten++;
                }
            }

            System.out.println("Number of pets written: " + petsWritten);

            JsonObject json = Json.createObjectBuilder()
                    .add("data", petArray.build())
                    .add("database", "3801_project")
                    .add("name", "PET")
                    .add("type", "table")
                    .build();

            FileWriter writer = new FileWriter("output/pets.json");
            JsonWriter jsonWriter = Json.createWriter(writer);
            jsonWriter.writeObject(json);
            jsonWriter.close();
            writer.close();
        } catch (IOException e) {
            System.out.println("Error writing file");
            e.printStackTrace();
        }
    }

    private static String getJSONStringNulls(JSONObject obj, String key) {
        return obj.isNull(key)? null: obj.getString(key);
    }

    private static Boolean getJSONBooleanNulls(JSONObject obj, String key) {
        return obj.isNull(key)? null: obj.getBoolean(key);
    }
}
