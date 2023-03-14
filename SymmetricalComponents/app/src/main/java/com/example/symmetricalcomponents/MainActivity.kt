package com.example.symmetricalcomponents

import android.annotation.SuppressLint
import android.graphics.Color
import android.os.Build
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity
import com.jjoe64.graphview.GraphView
import com.jjoe64.graphview.GridLabelRenderer
import com.jjoe64.graphview.series.DataPoint
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
        val startGraphPointPhaseOne = DataPoint(0.0,0.5)
        val startGraphPointPhaseTwo = DataPoint(-sqrt(3.0)/4, -0.25)
        val startGraphPointPhaseThree = DataPoint(sqrt(3.0)/4, -0.25)

        val startPointPhaseOnePos = DataPoint(0.0, 0.5)
        var prevPointPhaseOnePos = startPointPhaseOnePos
        val startPointPhaseTwoPos = DataPoint(-sqrt(3.0)/4, -0.25)
        val startPointPhaseThreePos = DataPoint(sqrt(3.0)/4, -0.25)

        val startPointPhaseOneNeg = DataPoint(0.0, 0.5)
        var prevPointPhaseOneNeg = startPointPhaseOneNeg
        val startPointPhaseTwoNeg = DataPoint(sqrt(3.0)/4, -0.25)
        val startPointPhaseThreeNeg = DataPoint(-sqrt(3.0)/4, -0.25)

        val startPointZero = DataPoint(0.0, 0.0)
        var prevPointZero = startPointZero

        //Create phase series
        val phaseOneSeries: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        val phaseTwoSeries: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        val phaseThreeSeries: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        setupSeries(phaseOneSeries, true, Color.GREEN, DataPoint(0.0, 0.0), startGraphPointPhaseOne)
        setupSeries(phaseTwoSeries, true, Color.BLUE, DataPoint(0.0, 0.0), startGraphPointPhaseTwo)
        setupSeries(phaseThreeSeries, true, Color.RED, DataPoint(0.0,0.0), startGraphPointPhaseThree)

        val phaseOneSeriesPos: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        val phaseTwoSeriesPos: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        val phaseThreeSeriesPos: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        setupSeries(phaseOneSeriesPos, true, Color.GREEN, DataPoint(0.0, 0.0), prevPointPhaseOnePos)
        setupSeries(phaseTwoSeriesPos, true, Color.BLUE, DataPoint(0.0, 0.0), startPointPhaseTwoPos)
        setupSeries(phaseThreeSeriesPos, true, Color.RED, DataPoint(0.0, 0.0), startPointPhaseThreePos)

        val phaseOneSeriesNeg: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        val phaseTwoSeriesNeg: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        val phaseThreeSeriesNeg: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        setupSeries(phaseOneSeriesNeg, true, Color.GREEN, DataPoint(0.0, 0.0), prevPointPhaseOneNeg)
        setupSeries(phaseTwoSeriesNeg, true, Color.BLUE, DataPoint(0.0, 0.0), startPointPhaseTwoNeg)
        setupSeries(phaseThreeSeriesNeg, true, Color.RED, DataPoint(0.0, 0.0), startPointPhaseThreeNeg)

        val zeroSeries: LineGraphSeries1<DataPoint> = LineGraphSeries1()
        setupSeries(zeroSeries, true, Color.BLACK, DataPoint(0.0, 0.0), prevPointZero)

        //Array of series, starting point pairs
        val series = arrayOf(
            Pair(phaseOneSeries, startGraphPointPhaseOne),
            Pair(phaseTwoSeries, startGraphPointPhaseTwo),
            Pair(phaseThreeSeries, startGraphPointPhaseThree),
            Pair(phaseOneSeriesPos, startPointPhaseOnePos),
            Pair(phaseTwoSeriesPos, startPointPhaseTwoPos),
            Pair(phaseThreeSeriesPos, startPointPhaseThreePos),
            Pair(phaseOneSeriesNeg, startPointPhaseOneNeg),
            Pair(phaseTwoSeriesNeg, startPointPhaseTwoNeg),
            Pair(phaseThreeSeriesNeg, startPointPhaseThreeNeg),
            Pair(zeroSeries, startPointZero)
        )

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

        val graphs = arrayOf(Pair(vGraph, "Unbalanced"), Pair(vGraphPos, "Positive"), Pair(vGraphNeg, "Negative"), Pair(vGraphZero, "Zero"))
        for (i in graphs.indices) {
            if (graphs[i].first == vGraph) {
                setupGraph(graphs[i].first, graphs[i].second)
            }
            else {
                setupGraph(graphs[i].first, graphs[i].second, GridLabelRenderer.GridStyle.BOTH,
                    hasVerLabels = false,
                    hasHorLabels = false
                )
            }
        }

        //Variables to keep track of phase series selected by user
        val phaseSeriesArr = arrayOf(phaseOneSeries, phaseTwoSeries, phaseThreeSeries)
        val previousCoord = arrayOf(startGraphPointPhaseOne, startGraphPointPhaseTwo, startGraphPointPhaseThree)
        var seriesArrIndex = 0

        //Initialise text views
        val phaseOneTag = "A"
        val phaseTwoTag = "B"
        val phaseThreeTag = "C"
        val phaseOnePosTag = "a1"
        val phaseOneNegTag = "a2"
        val zeroTag = "a0"
        outputLocation(vPhaseOneText, startGraphPointPhaseOne, phaseOneTag)
        outputLocation(vPhaseTwoText, startGraphPointPhaseTwo, phaseTwoTag)
        outputLocation(vPhaseThreeText, startGraphPointPhaseThree, phaseThreeTag)
        outputLocation(vPositiveText, prevPointPhaseOnePos, phaseOnePosTag)
        outputLocation(vNegativeText, prevPointPhaseOneNeg, phaseOneNegTag)
        outputLocation(vZeroText, prevPointZero, zeroTag)

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
            outputLocation(vPhaseOneText, previousCoord[0], phaseOneTag)
            outputLocation(vPhaseTwoText, previousCoord[1], phaseTwoTag)
            outputLocation(vPhaseThreeText, previousCoord[2], phaseThreeTag)

            previousX = xy.first
            previousY = xy.second
            v?.onTouchEvent(event) ?: true
        }

        vGraphPos.setOnTouchListener { v, event ->
            val xy = getEventLocation(event)

            prevPointPhaseOnePos = moveDataPoint(xy.first, xy.second, event, previousXPos, previousYPos, prevPointPhaseOnePos, phaseOneSeriesPos, phaseTwoSeriesPos, phaseThreeSeriesPos, vPositiveText, true)
            outputLocation(vPositiveText, prevPointPhaseOnePos, phaseOnePosTag)

            previousXPos = xy.first
            previousYPos = xy.second
            v?.onTouchEvent(event) ?: true
        }

        vGraphNeg.setOnTouchListener { v, event ->
            val xy = getEventLocation(event)

            prevPointPhaseOneNeg = moveDataPoint(xy.first, xy.second, event, previousXNeg, previousYNeg, prevPointPhaseOneNeg, phaseOneSeriesNeg, phaseTwoSeriesNeg, phaseThreeSeriesNeg, vNegativeText, true)
            outputLocation(vNegativeText, prevPointPhaseOneNeg, phaseOneNegTag)

            previousXNeg = xy.first
            previousYNeg = xy.second
            v?.onTouchEvent(event) ?: true
        }

        vGraphZero.setOnTouchListener { v, event ->
            val xy = getEventLocation(event)

            prevPointZero = moveDataPoint(xy.first, xy.second, event, previousXZero, previousYZero, prevPointZero, zeroSeries, null, null, vZeroText, false)
            outputLocation(vZeroText, prevPointZero, zeroTag)

            previousXZero = xy.first
            previousYZero = xy.second
            v?.onTouchEvent(event) ?: true
        }

        vResetButton.setOnClickListener {
            for (i in series.indices) {
                val values = orderData(DataPoint(0.0, 0.0), series[i].second)
                series[i].first.resetData(arrayOf(values[0], values[1]))
            }

            previousCoord[0] = startGraphPointPhaseOne
            previousCoord[1] = startGraphPointPhaseTwo
            previousCoord[2] = startGraphPointPhaseThree
            prevPointPhaseOnePos = startPointPhaseOnePos
            prevPointPhaseOneNeg = startPointPhaseOneNeg
            prevPointZero = startPointZero
        }
    }
}