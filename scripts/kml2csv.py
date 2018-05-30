from pykml import parser
import csv
from lxml.etree import tostring
import re
import pandas
import sys
import os
# replace DB_FILEPATH to the db_exported_file csv
df = pandas.read_csv("../../Master_File.csv")
file_dir = "../../KML_Files"
# change the color scheme here
def color(zscore, valid):
    zscore = float(zscore)
    if not valid:
        return "#6b717e99"
    elif zscore < -1:
        return "#b3664599"
    elif zscore < 1:
        return "#d3c8b899"
    else:
        return "#9bb37a99"

def marshall(s, type):
    try:
        return type(s)
    except TypeError:
        return 0.
geoid_pat = re.compile("<td>GEOID</td>\n\n<td>(.*?)</td>", re.MULTILINE)
geoid_lat = re.compile("<td>INTPTLAT</td>\n\n<td>(.*?)</td>", re.MULTILINE)
geoid_lon = re.compile("<td>INTPTLON</td>\n\n<td>(.*?)</td>", re.MULTILINE)
# replace KML_FILEPATH with the path to the kml file to convert
with open('data.csv', 'wb') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["color", "location", "geoid", "Ratio of Transit Dependent Population", "lat", "lon", "zscore"])
    for file in os.listdir(file_dir):
        print "Converting {}...".format(file)
        with open(os.path.join(file_dir, file, "doc.kml")) as f:
            root = parser.fromstring(f.read())
            for i in root.Document.Folder.Placemark:
                description = str(i.description)
                geoid = int(geoid_pat.findall(description)[0])
                lat = float(geoid_lat.findall(description)[0])
                lon = float(geoid_lon.findall(description)[0])
                row = df[df["Geo_ID"]==geoid]
                assert len(row) == 1 or len(row) == 0
                valid = len(row) == 1
                zscore = "{:.2f}".format(marshall(row["Gap_Zscore"], float))
                td_ratio = marshall(row["Percent_TD"], float)
                td_ratio = "{:.2f}%".format(td_ratio)
                row = [color(zscore, valid), tostring(i.MultiGeometry), geoid, td_ratio, lat, lon, zscore]
                writer.writerow(row)

