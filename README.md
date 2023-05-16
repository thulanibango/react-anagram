## Anagram Application

This is a project by Tulani Bango to implement and expose an algorithm that counts the **number of anagrams** found within the **included dictionary** for all **word lengths** in the dictionary.txt file.

This document will break down how the application was built. The application is a two-tier architecture. The languages that the application was built in are Java (Backend) and react-js framework(Frontend). The following is how I created the application:

**Architecture**

![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/700d0ee5badb062d07f33b717f6832f2b9a03e171d163629.png)

**Installation**

*   Frontend installation
    *   Node js
    *   Axios, Bootstrap
*   Backend installation
    *   Java 20
    *   Dependencies : Springboot, projectlombok

**Backend- algorithm**

```plaintext
#//        try block reads line by line and trims .  If line equals the lentgh wanted then the characters are sorted, stored as key in map object.

   try (BufferedReader reader = new BufferedReader(new InputStreamReader(resource.getInputStream()))) {
            String line;
            while ((line = reader.readLine()) != null) {
                line = line.trim();
                if (line.length() == length) {
                    char[] chars = line.toCharArray();
                    Arrays.sort(chars);
                    String sortedLine = new String(chars);
                    countMap.put(sortedLine, countMap.getOrDefault(sortedLine, 0) + 1);
                }
            }
        }
```
