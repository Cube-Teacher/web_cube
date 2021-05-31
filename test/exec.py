import sys
import os

commandfile = "../public/command.txt"
for j in range(1):
    filename = "../testcase/" + str(j) + ".txt "
    resultname = "../public/result/" + str(j) + ".txt "
    fp = open(resultname,"w")
    fp.close()
    os.system("cp " + str(filename) + commandfile)
    os.system("node ../index.js " + str(j))
    print("🚀️ Answering Test%02d Done" % (j), end=" ")
    if(j % 5 == 0 and j > 1):
        print()
