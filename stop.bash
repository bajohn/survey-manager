#!/bin/bash
cat "./pid.out" | while read line; do
	kill $line
done
echo "about to wait"
rm ./pid.out
sleep 1 #should have a responsive way of doing this
echo "done with wait"