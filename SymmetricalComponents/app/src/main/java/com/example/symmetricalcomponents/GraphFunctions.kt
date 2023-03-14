package com.example.symmetricalcomponents

import android.annotation.SuppressLint
import android.util.Log
import android.view.MotionEvent
import android.widget.TextView
import com.jjoe64.graphview.GraphView
import com.jjoe64.graphview.GridLabelRenderer
import com.jjoe64.graphview.Viewport
import com.jjoe64.graphview.helper.StaticLabelsFormatter
import com.jjoe64.graphview.series.DataPoint
import com.jjoe64.graphview.series.LineGraphSeries
import java.math.BigDecimal
import java.math.RoundingMode
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin

@SuppressLint("SetTextI18n")
public fun moveDataPoint(x: Double,
                          y: Double,
                          event: MotionEvent,
                          prevX: Double,
                          prevY: Double,
                          prevPoint: DataPoint,
                          series: LineGraphSeries<DataPoint>,
                          series2: LineGraphSeries<DataPoint>?,
                          series3: LineGraphSeries<DataPoint>?,
                          textView: TextView,
                          posOrNeg: Boolean,
                          changeMultiplier: Float = 0.008f) : DataPoint {

    when (event?.action) {
        MotionEvent.ACTION_MOVE -> {
            var dx: Double = x - prevX
            var dy: Double = y - prevY

            dx*=changeMultiplier
            dy*=changeMultiplier


            val newDataPoint = DataPoint(prevPoint.x + dx, prevPoint.y - dy)
            Log.i("zero", "prev newDataPoint: $newDataPoint")
            val values = orderData(DataPoint(0.0,0.0), newDataPoint)
            series.resetData(arrayOf(values[0], values[1]))

            if (posOrNeg) {
                moveAdditionalDataPoints(newDataPoint, series2, series3)
            }

            textView.text = "a0 = ${BigDecimal(newDataPoint.x).setScale(4, RoundingMode.HALF_UP)}" +
                    " + j${BigDecimal(newDataPoint.y).setScale(4, RoundingMode.HALF_UP)}"

            Log.i("zero", "newDataPoint: $newDataPoint")
            return newDataPoint
        }
    }
    return prevPoint
}

//Move other series on the graph relative to the first series moved
public fun moveAdditionalDataPoints(newDataPoint: DataPoint, series2: LineGraphSeries<DataPoint>?, series3: LineGraphSeries<DataPoint>?) {
    val newDataPoint2 = getDataPointAtAngle(newDataPoint, -2* PI /3)
    val values2 = orderData(DataPoint(0.0, 0.0), newDataPoint2)
    series2?.resetData(arrayOf(values2[0], values2[1]))

    val newDataPoint3 = getDataPointAtAngle(newDataPoint, 2* PI /3)
    val values3 = orderData(DataPoint(0.0, 0.0), newDataPoint3)
    series3?.resetData(arrayOf(values3[0], values3[1]))
}

//Returns Datapoint given a starting Datapoint and an angle in radians
public fun getDataPointAtAngle(datapoint: DataPoint, angle: Double) : DataPoint {
    return DataPoint(datapoint.x* cos(angle) - datapoint.y* sin(angle), datapoint.y* cos(angle) + datapoint.x* sin(angle))
}

//Order phase series data (lowest x value must always come first)
public fun orderData(dataPoint1: DataPoint, dataPoint2: DataPoint): Array<DataPoint> {
    if (dataPoint1.x > dataPoint2.x) {
        return arrayOf(dataPoint2, dataPoint1)
    }
    return arrayOf(dataPoint1, dataPoint2)
}

public fun setupGraph(graph: GraphView,
                       graphLines: GridLabelRenderer.GridStyle = GridLabelRenderer.GridStyle.BOTH,
                       hasVerLabels: Boolean = true,
                       hasHorLabels: Boolean = true,
                       highlightAxes: Boolean = true) {
    graph.gridLabelRenderer.gridStyle = graphLines
    graph.gridLabelRenderer.isVerticalLabelsVisible = hasVerLabels;
    graph.gridLabelRenderer.isHorizontalLabelsVisible = hasHorLabels;
    graph.gridLabelRenderer.isHighlightZeroLines = highlightAxes
}

//Define graph and viewport values
public fun makeGraph(viewport: Viewport, graph: GraphView) {
    // Give x and y axes their range
    graph.gridLabelRenderer.setHumanRounding(false)
    viewport.isYAxisBoundsManual = true
    viewport.isXAxisBoundsManual = true
    viewport.setMinX(-1.0)
    viewport.setMaxX(1.0)
    viewport.setMinY(-1.0)
    viewport.setMaxY(1.0)

    val staticLabelsFormatter = StaticLabelsFormatter(graph)
    staticLabelsFormatter.setHorizontalLabels(
        arrayOf(
            "-1.0",
            "-0.8",
            "-0.6",
            "-0.4",
            "-0.2",
            "0.0",
            "0.2",
            "0.4",
            "0.6",
            "0.8",
            "1.0"
        )
    )
    staticLabelsFormatter.setVerticalLabels(
        arrayOf(
            "-1.0",
            "-0.8",
            "-0.6",
            "-0.4",
            "-0.2",
            "0.0",
            "0.2",
            "0.4",
            "0.6",
            "0.8",
            "1.0"
        )
    )
}

//Set variables in phase series
public fun setupSeries(series: LineGraphSeries<DataPoint>, drawDataPoints: Boolean, colour: Int, dataPoint1: DataPoint, dataPoint2: DataPoint) {
    series.isDrawDataPoints = drawDataPoints
    series.color = colour
    val dataPoints = orderData(dataPoint1, dataPoint2)

    series.appendData(
        dataPoints[0],
        false,
        100
    )
    series.appendData(
        dataPoints[1],
        false,
        100
    )
}