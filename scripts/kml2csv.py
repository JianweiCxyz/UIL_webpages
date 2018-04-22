from pykml import parser
import csv
from lxml.etree import tostring
import re
import pandas
# replace DB_FILEPATH to the db_exported_file csv
df = pandas.read_csv("DB_FILEPATH")
# change the color scheme here
colors = {
    "#PolyStyle00": "#a0cc6c99",
    "#PolyStyle01": "#faead099",
    "#PolyStyle014": "#db5a2599"
}
def marshall(s, type):
    try:
        return type(s)
    except TypeError:
        return 0.
geoid_pat = re.compile("<td>GEOID</td>\n\n<td>(.*?)</td>", re.MULTILINE)
gap_pat = re.compile("<td>Gap</td>\n\n<td>(.*?)</td>", re.MULTILINE)
# replace KML_FILEPATH with the path to the kml file to convert
with open('KML_FILEPATH') as f:
    root = parser.fromstring(f.read())
    with open('result.csv', 'wb') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["name", "color", "location", "geoid", "Transit Desert Score", "Total Population", "Total Transit dependent population",
                "Ratio of Transit Dependent Population"])
        for i in root.Document.Folder.Placemark:
            description = str(i.description)
            geoid = int(geoid_pat.findall(description)[0])
            gap = float(gap_pat.findall(description)[0])
            zscore = "{:.2f}".format(gap)
            row = df[df["Geo_ID"]==geoid]
            total_pop = marshall(row["Total_Pop"], int)
            td_pop = marshall(row["TD_Pop"], int)
            td_ratio = marshall(row["Percent_TD"], float)
            td_ratio = "{:.2f}%".format(td_ratio)
            row = [i.name, colors[i.styleUrl], tostring(i.MultiGeometry), geoid, zscore, total_pop, td_pop, td_ratio]
            writer.writerow(row)

