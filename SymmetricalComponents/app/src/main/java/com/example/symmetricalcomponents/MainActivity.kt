package com.example.symmetricalcomponents

import android.annotation.SuppressLint
import android.graphics.Color
import android.os.Build
import android.os.Bundle
import android.view.MotionEvent
import android.widget.Button
import android.widget.TextView
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity
import com.jjoe64.graphview.GraphView
import com.jjoe64.graphview.GridLabelRenderer
import com.jjoe64.graphview.Viewport
import com.jjoe64.graphview.helper.StaticLabelsFormatter
import com.jjoe64.graphview.series.DataPoint
import java.math.BigDecimal
import java.math.RoundingMode
import kotlin.math.sqrt
import com.jjoe64.graphview.series.LineGraphSeries as LineGraphSeries1


class MainActivity : AppCompatActivity() {
    private var previousX: Double = 0.0
    private var previousY: Double = 0.0

    private var previousXPos: Double = 0.0
    private var previousYPos: Double = 0.0

    private var previousXNeg: Double = 0.0
    private var previousYNeg: Double = 0.0

    private var previousXZero: Double = 0.0
    private var previousYZero: Double = 0.0

    @RequiresApi(Build.VERSION_CODES.R)
    @SuppressLint("ClickableViewAccessibility", "SetTextI18n")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //Get Views
        val vGraph = findViewById<GraphView>(R.id.graph)
        val vGraphPos = findViewById<GraphView>(R.id.graphPositive)
        val vGraphNeg = findViewById<GraphView>(R.id.graphNegative)
        val vGraphZero = findViewById<GraphView>(R.id.graphZero)
        val vPhaseOneText = findViewById<TextView>(R.id.phaseOneText)
        val vPhaseTwoText = findViewById<TextView>(R.id.phaseTwoText)
        val vPhaseThreeText = findViewById<TextView>(R.id.phaseThreeText)
        val vPositiveText = findViewById<TextView>(R.id.positiveText)
        val vNegativeText = findViewById<TextView>(R.id.negativeText)
        val vZeroText = findViewById<TextView>(R.id.zeroText)
        val vResetButton = findViewById<Button>(R.id.resetButton)

        //Define starting locations for phase series
        val previousGraphPointPhaseOne = DataPoint(0.5,0.5)
        val previousGraphPointPhaseTwo = DataPoint(-0.5,0.1)
        val previousGraphPointPhaseThree = DataPoint(0.5,0.0)

        var prevPointPhaseOnePos = DataPoint(0.0, 1.0)
        val prevPointPhaseTwoPos = DataPoint(-sqrt(3.0)/2, -0.5)
        val prevPointPhaseThreePos = DataPoint(sqrt(3.0)/2, -0.5)

        var prevPointPhaseOneNeg = DataPoint(0.0, 1.0)
        val prevPointPhaseTwoNeg = DataPoint(sqrt(3.0)/2, -0.5)
        val prevPointPhaseThreeNeg = DataPoint(-sqrt(3.0)/2, -0.5)

        var prevPointZero = DataPoint(0.0, 0.0)

        //Initialise text views
        outputLocation(vPhaseOneText, previousGraphPointPhaseOne, "A")
        outputLocation(vPhaseTwoText, previousGraphPointPhaseTwo, "B")
        outputLocation(vPhaseThreeText, previousGraphPointPhaseThree, "C")
        outputLocation(vPositiveText, prevPointPhaseOnePos, "a1")
        outputLocation(vNegativeText, prevPointPhaseOneNeg, "a2")
        outputLocation(vZeroText, prevPointZero, "a0")

        //Create phase series
        val phaseOneSeries: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        val phaseTwoSeries: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        val phaseThreeSeries: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        setupSeries(phaseOneSeries, true, Color.GREEN, DataPoint(0.0, 0.0), previousGraphPointPhaseOne)
        setupSeries(phaseTwoSeries, true, Color.BLUE, DataPoint(0.0, 0.0), previousGraphPointPhaseTwo)
        setupSeries(phaseThreeSeries, true, Color.RED, DataPoint(0.0,0.0), previousGraphPointPhaseThree)

        val phaseOneSeriesPos: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        val phaseTwoSeriesPos: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        val phaseThreeSeriesPos: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        setupSeries(phaseOneSeriesPos, true, Color.GREEN, DataPoint(0.0, 0.0), prevPointPhaseOnePos)
        setupSeries(phaseTwoSeriesPos, true, Color.BLUE, DataPoint(0.0, 0.0), prevPointPhaseTwoPos)
        setupSeries(phaseThreeSeriesPos, true, Color.RED, DataPoint(0.0, 0.0), prevPointPhaseThreePos)

        val phaseOneSeriesNeg: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        val phaseTwoSeriesNeg: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        val phaseThreeSeriesNeg: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        setupSeries(phaseOneSeriesNeg, true, Color.GREEN, DataPoint(0.0, 0.0), prevPointPhaseOneNeg)
        setupSeries(phaseTwoSeriesNeg, true, Color.BLUE, DataPoint(0.0, 0.0), prevPointPhaseTwoNeg)
        setupSeries(phaseThreeSeriesNeg, true, Color.RED, DataPoint(0.0, 0.0), prevPointPhaseThreeNeg)

        val zeroSeries: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        setupSeries(zeroSeries, true, Color.BLACK, DataPoint(0.0, 0.0), prevPointZero)

        //Add series to graph views
        vGraph.addSeries(phaseOneSeries)
        vGraph.addSeries(phaseTwoSeries)
        vGraph.addSeries(phaseThreeSeries)

        vGraphPos.addSeries(phaseOneSeriesPos)
        vGraphPos.addSeries(phaseTwoSeriesPos)
        vGraphPos.addSeries(phaseThreeSeriesPos)

        vGraphNeg.addSeries(phaseOneSeriesNeg)
        vGraphNeg.addSeries(phaseTwoSeriesNeg)
        vGraphNeg.addSeries(phaseThreeSeriesNeg)

        vGraphZero.addSeries(zeroSeries)

        //Setup graphs and viewports
        val viewport = vGraph.viewport
        makeGraph(viewport, vGraph)
        val viewportPos = vGraphPos.viewport
        makeGraph(viewportPos, vGraphPos)
        val viewportNeg = vGraphNeg.viewport
        makeGraph(viewportNeg, vGraphNeg)
        val viewportZero = vGraphZero.viewport
        makeGraph(viewportZero, vGraphZero)

        val graphs = arrayOf(vGraph, vGraphPos, vGraphNeg, vGraphZero)
        for (g in graphs) {
            if (g == vGraph) {
                setupGraph(g)
            }
            else {
                setupGraph(g, GridLabelRenderer.GridStyle.BOTH,
                    hasVerLabels = false,
                    hasHorLabels = false
                )
            }
        }

        //Variables to keep track of phase series selected by user
        val phaseSeriesArr = arrayOf(phaseOneSeries, phaseTwoSeries, phaseThreeSeries)
        val previousCoord = arrayOf(previousGraphPointPhaseOne, previousGraphPointPhaseTwo, previousGraphPointPhaseThree)
        var seriesArrIndex = 0

        //Listeners for user input on phase series
        phaseOneSeries.setOnDataPointTapListener { series, datapoint ->
            seriesArrIndex = 0
        }
        phaseTwoSeries.setOnDataPointTapListener { series, datapoint ->
            seriesArrIndex = 1
        }
        phaseThreeSeries.setOnDataPointTapListener { series, datapoint ->
            seriesArrIndex = 2
        }

        //Touch listeners for graph view that updates series per user input
        vGraph.setOnTouchListener { v, event ->

            val xy = getEventLocation(event)

            previousCoord[seriesArrIndex] = moveDataPoint(xy.first, xy.second, event, previousX, previousY, previousCoord[seriesArrIndex], phaseSeriesArr[seriesArrIndex], null, null, vPhaseOneText, false, 0.002f)
            outputLocation(vPhaseOneText, previousCoord[0], "A")
            outputLocation(vPhaseTwoText, previousCoord[1], "A")
            outputLocation(vPhaseThreeText, previousCoord[2], "A")

            previousX = xy.first
            previousY = xy.second
            v?.onTouchEvent(event) ?: true
        }

        vGraphPos.setOnTouchListener { v, event ->
            val xy = getEventLocation(event)

            prevPointPhaseOnePos = moveDataPoint(xy.first, xy.second, event, previousXPos, previousYPos, prevPointPhaseOnePos, phaseOneSeriesPos, phaseTwoSeriesPos, phaseThreeSeriesPos, vPositiveText, true)
            outputLocation(vPositiveText, prevPointPhaseOnePos, "a1")

            previousXPos = xy.first
            previousYPos = xy.second
            v?.onTouchEvent(event) ?: true
        }

        vGraphNeg.setOnTouchListener { v, event ->
            val xy = getEventLocation(event)

            prevPointPhaseOneNeg = moveDataPoint(xy.first, xy.second, event, previousXNeg, previousYNeg, prevPointPhaseOneNeg, phaseOneSeriesNeg, phaseTwoSeriesNeg, phaseThreeSeriesNeg, vNegativeText, true)
            outputLocation(vNegativeText, prevPointPhaseOneNeg, "a2")

            previousXNeg = xy.first
            previousYNeg = xy.second
            v?.onTouchEvent(event) ?: true
        }

        vGraphZero.setOnTouchListener { v, event ->
            val xy = getEventLocation(event)

            prevPointZero = moveDataPoint(xy.first, xy.second, event, previousXZero, previousYZero, prevPointZero, zeroSeries, null, null, vZeroText, false)
            outputLocation(vZeroText, prevPointZero, "a0")

            previousXZero = xy.first
            previousYZero = xy.second
            v?.onTouchEvent(event) ?: true
        }

        vResetButton.setOnClickListener {
            /*val series = arrayOf(phaseOneSeries, phaseTwoSeries, phaseThreeSeries, phaseOneSeriesPos, phaseTwoSeriesPos, phaseThreeSeriesPos, phaseOneSeriesNeg, phaseTwoSeriesNeg, phaseThreeSeriesNeg, zeroSeries)
            val startPoses = arrayOf(previousGraphPointPhaseOne, previousGraphPointPhaseTwo, previousGraphPointPhaseThree, prevPointPhaseOnePos, prevPointPhaseTwoPos, prevPointPhaseThreePos, prevPointPhaseOneNeg, prevPointPhaseTwoNeg, prevPointPhaseThreeNeg, prevPointZero)
            for (i in 0..series.size) {
                val values = orderData(DataPoint(0.0, 0.0), startPoses[i])
                series[i].resetData(arrayOf(values[0], values[1]))
            }*/
        }
    }
}